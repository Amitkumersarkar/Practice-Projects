import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { toast } from 'react-toastify';
import HomeFood from "../assets/home_nodules.png"
import HomeFood2 from "../assets/f1.png"
import DownArrow from "../assets/12-arrow-down-solid.gif"

export default function Cart() {
    const [showNav, setShowNav] = useState(false);
    const { cart, updateQuantity, removeItem, getTotal, getItemCount, clearCart } = useCart();
    const navigate = useNavigate();

    const handlePayment = async () => {
        const paymentData = {
            items: cart,
            total: getTotal(),
            quantity: getItemCount(),
            timestamp: new Date().toISOString()
        };
        try {
            const response = await fetch('http://localhost:4000/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paymentData)
            });
            const result = await response.json();
            console.log('Payment posted:', result);
            toast.success('Payment successful!');
            clearCart();
            navigate('/');
        } catch (error) {
            console.error('Error posting payment:', error);
            toast.error('Payment failed. Please try again.');
        }
    };

    return (
        <>
            <div className="home_Section mb-5">
                <div className="home_Container">
                    <div className="nav_Bar">
                        <div className="nav_Container">
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0, scale: 1.2 }}
                                exit={{ opacity: 0, x: -100 }}
                                className="navbar-brand">
                                <Link to="/" className="logo-text">Cravrr</Link>
                            </motion.div>
                            <div className="nav-item">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0, scale: 1.2 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    className="nav-Text">
                                    <p>
                                        Eexpress Delivery
                                        <h4>01987564546 </h4>
                                    </p>
                                    <img className="dropDown" onClick={() => setShowNav(!showNav)} src={DownArrow} alt="loading" />
                                </motion.div>
                                <ul
                                    className="nav" id={showNav ? "show_Nav" : "ul.nav"}>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/food" className="nav-link">Food</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/cart" className="nav-link">Cart ({getItemCount()})</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Menu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Our Story</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="cart-container">
                        <h1>Your Cart</h1>
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <div className="cart-content">
                                <div className="cart-items">
                                    {cart.map((item) => (
                                        <div key={item.id} className="cart-item">
                                            <img src={item.food_img} alt={item.title} className="cart-item-img" />
                                            <div className="cart-item-details">
                                                <h3>{item.title}</h3>
                                                <p>${item.price}</p>
                                                <div className="quantity-controls">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                                </div>
                                                <button onClick={() => removeItem(item.id)} className="remove-btn">Remove</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="cart-summary">
                                    <h2>Total: {getTotal().toFixed(2)}Tk</h2>
                                    <button onClick={handlePayment} className="payment-btn">Proceed to Payment</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}