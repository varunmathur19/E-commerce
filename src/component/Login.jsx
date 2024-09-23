import React from "react";

export default function Login() {
    return (
        <div>
            <div className="login-page  my-5">
                <div
                    className="container"
                    style={{ backgroundColor: "black", borderRadius: "10px" }}
                >
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <h3 className="mb-3" style={{ color: "white" }}>
                                Login Now
                            </h3>
                            <div
                                className=" shadow rounded"
                                style={{
                                    backgroundColor: "black",
                                    border: " 0.5px solid white",
                                }}
                            >
                                <div className="row">
                                    <div className="col-md-7 pe-0">
                                        <div className="form-left h-100 py-5 px-5">
                                            <form action="" className="row g-4">
                                                <div className="col-12">
                                                    <label
                                                        style={{
                                                            color: "white",
                                                        }}
                                                    >
                                                        Username
                                                        <span className="text-danger">
                                                            *
                                                        </span>
                                                    </label>
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            {/* <i className="bi bi-person-fill"></i> */}
                                                            <i class="fa-solid fa-user"></i>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Username"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label
                                                        style={{
                                                            color: "white",
                                                        }}
                                                    >
                                                        Password
                                                        <span className="text-danger">
                                                            *
                                                        </span>
                                                    </label>
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            {/* <i className="bi bi-lock-fill"></i> */}
                                                            <i class="fa-solid fa-lock"></i>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Password"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-sm-6">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="inlineFormCheck"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            for="inlineFormCheck"
                                                            style={{
                                                                color: "white",
                                                            }}
                                                        >
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6">
                                                    <a
                                                        href="#"
                                                        className="float-end"
                                                        style={{
                                                            color: "rgba(255, 193, 7, 255)",
                                                        }}
                                                    >
                                                        Forgot Password?
                                                    </a>
                                                </div>

                                                <div className="col-12">
                                                    <button
                                                        type="submit"
                                                        className="btn  px-4 float-end mt-4"
                                                        style={{
                                                            background:
                                                                " rgba(255, 193, 7, 255)",
                                                            color: "black",
                                                        }}
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ps-0 d-none d-md-block">
                                        <div
                                            className="form-right h-100  text-center pt-5"
                                            style={{
                                                color: "rgba(255, 193, 7, 255)",
                                            }}
                                        >
                                            <i className="bi bi-bootstrap"></i>
                                            <h2 className="fs-1">
                                                Welcome Back!!!
                                            </h2>
                                            <img
                                                src="https://cdn.vectorstock.com/i/1000v/24/74/modern-ecommerce-online-shop-store-logo-design-vector-43842474.jpg"
                                                alt=""
                                                height={"200px"}
                                                width={"300px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            {/* <!-- Bootstrap JS --> */}
        </div>
    );
}
