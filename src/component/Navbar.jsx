import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount, toggleView }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg " id="navbar">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand"
                        to="/product"
                        style={{ color: "white" }}
                    >
                        MyProduct
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link to="/home">
                                    <a
                                        className="nav-link"
                                        // aria-current="page"
                                        id="urgent"
                                    >
                                        Home
                                    </a>
                                </Link>
                            </li> */}
                            <li className="nav-item dropdown mx-2">
                                <a
                                    className="nav-link dropdown-toggle my-1"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ color: "white", fontSize: "18px" }}
                                >
                                    Kids
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                    style={{
                                        backgroundColor: "rgba(255,193,7,255)",
                                    }}
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Soft Toys
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            All Baby Care
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Footwear
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Stationery
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Other
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-1">
                                <a
                                    className="nav-link dropdown-toggle  my-1"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ color: "white", fontSize: "18px" }}
                                >
                                    Men
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                    style={{
                                        backgroundColor: "rgba(255,193,7,255)",
                                    }}
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            T-Shirts
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Belts
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Track Pants
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Shoes
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Other
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a
                                    className="nav-link dropdown-toggle my-1"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ color: "white", fontSize: "18px" }}
                                >
                                    Appliance
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                    style={{
                                        backgroundColor: "rgba(255,193,7,255)",
                                    }}
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Washing Machine
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a className="dropdown-item" href="#">
                                            Belts
                                        </a>
                                    </li> */}
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Air Conditioner
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Refrigerator
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Other
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/* <button
                            className="btn"
                            type="button"
                            // bg="rgba(255, 193, 7, 255)"
                            style={{
                                // border: "2px solid rgba(255,193,7,255)",
                                // color: "rgba(255,193,7,255)",
                                backgroundColor: "rgba(255, 193, 7, 255)",
                            }}
                        >
                            Add to cart: {cartCount}
                            <i
                                className="fa-solid fa-cart-shopping "
                                style={{ color: "black" }}
                            ></i>
                        </button> */}

                        <form className="d-flex">
                            <Link to="/login">
                                <button
                                    className="btn btn-outline mx-2"
                                    type="button"
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 193, 7, 255)",
                                        color: "black",
                                    }}
                                >
                                    Login
                                </button>
                            </Link>

                            <Link to="/signup">
                                <div
                                    className="btn btn-outline mx-2"
                                    type="submit"
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 193, 7, 255)",
                                        color: "black",
                                    }}
                                >
                                    Sign up
                                </div>
                            </Link>
                            <Link to="/trend">
                                <button
                                    className="btn btn-outline mx-2"
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 193, 7, 255)",
                                        color: "black",
                                    }}
                                    type="button"
                                    onClick={toggleView}
                                >
                                    Trending and Most Ordered
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <!-- ===== BOX ICONS ===== --> */}
            <link
                href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                rel="stylesheet"
            />

            {/* <!--===== FOOTER =====--> */}
        </div>
    );
}
