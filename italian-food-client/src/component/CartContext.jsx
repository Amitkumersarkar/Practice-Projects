import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const saveCart = (newCart) => {
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const addItem = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            const updatedCart = cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
            saveCart(updatedCart);
        } else {
            const newItem = { ...item, quantity: 1 };
            saveCart([...cart, newItem]);
        }
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeItem(id);
            return;
        }
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        saveCart(updatedCart);
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        saveCart(updatedCart);
    };

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getItemCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    const clearCart = () => {
        saveCart([]);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            updateQuantity,
            removeItem,
            getTotal,
            getItemCount,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};