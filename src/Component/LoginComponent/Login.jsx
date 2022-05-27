import React from "react";
import './Login.css'

const linkedin = new URL("../../images/linkedin.png", import.meta.url)
const google = new URL("../../images/google.png", import.meta.url)
const facebook = new URL("../../images/fb.png", import.meta.url)

function Login() {
    return (
        <div className="login">
            <div className="card sign-in-form">
                <div className="card-header text-center">
                    <h2>Sign In</h2>
                    <p>Enjoy the referring world</p>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <div><label for="exampleInputEmail1" className="form-label mailLabel">Email address</label></div>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label pswdLabel">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-primary" type="button">Sign In</button>
                        </div>

                    </form>
                </div>
                <div className="card-footer text-muted">
                    <h6 className="or-text text-center">or</h6>
                    <br />
                    <br />
                    <div className="icon-login">
                        <h5 >Sign in with</h5>
                        <div className="social-icons">
                            <a href=""><img src={google} height="38px" width="38px" /></a>
                            <a href=""><img src={linkedin} height="40x" width="40px" /></a>
                            <a href=""><img src={facebook} height="40px" width="40px" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Login;