// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./component/Form";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./component/Product";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import Trending from "./component/Trending";
import Shop from "./component/Shop";

function App() {
    const [currentView, setCurrentView] = useState("trending"); // Default view is 'trending'
    const [cartCount, setCartCount] = useState(0); // State to manage cart count

    const toggleView = () => {
        setCurrentView((prevView) =>
            prevView === "trending" ? "product" : "trending"
        );
    };

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };
    useEffect(() => {
        console.warn(`Cart count has been updated: ${cartCount}`);
    }, [cartCount]);

    // const [count, setCount] = useState(0);

    return (
        <>
            <BrowserRouter>
                <Navbar cartCount={cartCount} toggleView={toggleView} />
                {/* <Shop></Shop> */}
                <Routes>
                    <Route
                        path="/"
                        element={<Product onAddToCart={handleAddToCart} />}
                    />
                    <Route
                        path="/product"
                        element={<Product onAddToCart={handleAddToCart} />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/trend"
                        element={
                            currentView === "product" ? (
                                <Trending />
                            ) : (
                                <Product onAddToCart={handleAddToCart} />
                            )
                        }
                    />
                </Routes>
            </BrowserRouter>
            {/* <Form></Form> */}
        </>
    );
}

export default App;
