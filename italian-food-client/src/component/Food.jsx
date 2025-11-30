import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { toast } from 'react-toastify';
import HomeFood from "../assets/home_nodules.png";
import HomeFood2 from "../assets/f1.png";
import DownArrow from "../assets/12-arrow-down-solid.gif";

export default function Food() {
    const [showNav, setShowNav] = useState(false);
    const { getItemCount } = useCart();

    const [foodData, setFoodData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        food_img: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFoodData({
            ...foodData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:4000/foods", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(foodData)
            });

            const result = await response.json();
            console.log("Food data posted:", result);

            setMessage("Food data posted successfully!");
            setFoodData({
                name: "",
                description: "",
                price: "",
                category: "",
                food_img: ""
            });
        } catch (error) {
            console.error("Error posting food data:", error);
            setMessage("Failed to post food data. Please try again.");
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
                                className="navbar-brand"
                            >
                                <Link to="/" className="logo-text">Cravrr</Link>
                            </motion.div>

                            <div className="nav-item">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0, scale: 1.2 }}
                                    className="nav-Text"
                                >
                                    <div>
                                        <span>Express Delivery</span>
                                        <h4>01987564546</h4>
                                    </div>

                                    <img
                                        className="dropDown"
                                        onClick={() => setShowNav(!showNav)}
                                        src={DownArrow}
                                        alt="loading"
                                    />
                                </motion.div>

                                <ul className="nav" id={showNav ? "show_Nav" : "hide_Nav"}>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/food" className="nav-link">Food</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/cart" className="nav-link">
                                            Cart ({getItemCount()})
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Menu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="food-container"
                    >
                        <h1>Add New Food Item</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Food Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your food name"
                                    value={foodData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Enter your food description"
                                    value={foodData.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Price:</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    placeholder="Enter your food price"
                                    value={foodData.price}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Category:</label>
                                <input
                                    type="text"
                                    id="category"
                                    name="category"
                                    placeholder="Enter your food category"
                                    value={foodData.category}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="food_img">Food Image:</label>
                                <input
                                    type="url"
                                    id="food_img"
                                    name="food_img"
                                    className="border p-2 rounded w-full"
                                    autoComplete="off"
                                    placeholder=""
                                    value={foodData.food_img}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="submit-btn">
                                Add Food
                            </button>
                        </form>

                        {message && <p className="message">{message}</p>}
                    </motion.div>
                </div>
            </div>
        </>
    );
}
