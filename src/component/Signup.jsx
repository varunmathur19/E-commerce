import React from "react";

export default function Signup() {
    return (
        <>
            {/* <!-- Registration 3 - Bootstrap Brain Component --> */}
            <section className="p-3 p-md-4 p-xl-5" style={{ height: "650px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 bsb-tpl-bg-platinum">
                            <div className="d-flex flex-column justify-content-between h-100 p-3 p-md-4 p-xl-5">
                                <h3 className="m-0 text-light">Welcome!</h3>
                                <center>
                                    <img
                                        className="img-fluid rounded  mx-5   "
                                        loading="lazy"
                                        src="https://thumbs.dreamstime.com/b/online-store-icon-logo-element-illustration-online-store-icon-logo-element-illustration-online-store-symbol-design-ecommerce-136671956.jpg"
                                        alt="BootstrapBrain Logo"
                                        style={{
                                            height: "400px",
                                            width: "400px",
                                        }}
                                    />
                                </center>
                                <p className="mb-0 text-light">
                                    Not a member yet?{" "}
                                    <a
                                        href="#!"
                                        className="link-secondary text-decoration-none text-light"
                                    >
                                        Register now
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 bsb-tpl-bg-lotion">
                            <div className="p-3 p-md-4 p-xl-5">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-5">
                                            <h2 className="h3 text-light">
                                                Registration
                                            </h2>
                                            <h3 className="fs-6 fw-normal text-secondary m-0 text-light">
                                                Enter your details to register
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <form action="#!">
                                    <div className="row gy-3 gy-md-4 overflow-hidden">
                                        <div className="col-12">
                                            <label
                                                for="firstName"
                                                className="form-label text-light"
                                            >
                                                Username/Email{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="firstName"
                                                id="firstName"
                                                placeholder="Username/Email"
                                                required
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label
                                                for="email"
                                                className="form-label text-light"
                                            >
                                                Password{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Password"
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label
                                                for="password"
                                                className="form-label text-light"
                                            >
                                                Confirm Password{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                id="password"
                                                placeholder="Confirm Password"
                                                value=""
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    name="iAgree"
                                                    id="iAgree"
                                                    required
                                                />
                                                <label
                                                    className="form-check-label text-secondary text-light"
                                                    for="iAgree"
                                                >
                                                    I agree to the{" "}
                                                    <a
                                                        href="#!"
                                                        className=" text-decoration-none"
                                                        style={{
                                                            color: "rgba(255, 193, 7, 255)",
                                                        }}
                                                    >
                                                        terms and conditions
                                                    </a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button
                                                    className="btn bsb-btn-xl btn-primary"
                                                    type="submit"
                                                    style={{
                                                        border: "2px solid rgba(255, 193, 7, 255)",
                                                        background: "black",
                                                        color: "rgba(255, 193, 7, 255)",
                                                    }}
                                                >
                                                    Sign up
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-12">
                                        <p className="m-0 text-secondary text-end my-2 text-light ">
                                            Already have an account?{" "}
                                            <a
                                                href="#!"
                                                className=" text-decoration-none"
                                                style={{
                                                    color: "rgba(255, 193, 7, 255)",
                                                }}
                                            >
                                                Sign in
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
