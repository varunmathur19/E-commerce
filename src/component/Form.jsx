import React from "react";

export default function Form() {
    function hish() {
        let a = document.getElementById("demo");
        if (a.type == "password") {
            a.type = "text";
        } else {
            a.type = "password";
        }
    }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-6">
                        <form>
                            <h2 className="my-3">Sign up..</h2>
                            <h4>Username</h4>
                            <input
                                type="username"
                                className="form-control"
                                placeholder="Password"
                                id="sec1"
                            />
                            <h4>Password</h4>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                id="demo"
                            ></input>
                        </form>
                        <center>
                            <button
                                className="btn my-3 "
                                type="button"
                                id="signupbtn"
                            >
                                <div className="text-center">Sign up</div>
                            </button>
                        </center>
                        <div className="row">
                            <div className="col-6">
                                <input type="checkbox" onClick={hish}></input>
                                show paassword
                            </div>
                            <div className="col-6">
                                <p className="mx-5">Forget Password</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6" id="black">
                        <div className="text-center my-5">
                            <h2>Welcome to Login</h2>
                            <button
                                className="btn my-3 "
                                type="button"
                                id="loginfacebtn"
                            >
                                <div className="text-center">Log in</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
