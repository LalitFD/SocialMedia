import "./Sign.css";
// import loginImage from "./img.png"
import { Link } from "react-router-dom";

function Sign() {
    return <>
        <div className="login-page">
            <div className="login-left">
                <h2 className="logo" style={{ position: "relative", right: "10%", top: "-3%" }}>Social</h2>
                <p style={{ marginBottom: "200px", position: "relative", right: "5%", top: "-3%" }}>
                    Connect with the world <span style={{ color: "green" }}>instantly</span> join the ultimate <strong style={{ color: "green" }}>Social Hub.</strong>
                </p>

                <p className="subtext" style={{ position: "relative", position: "relative", right: "5%", top: "-200px", fontSize: "15px" }}>
                    Stay updated, share moments and grow your network. <br />
                    Unlimited access to posts, reels, stories, and more – all in one place.
                </p>
            </div>

            <div className="login-right">
                <h2 style={{ color: "black" }}>Sign UP</h2>
                <form>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Enter Email" />
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Create Password" />
                    <button type="submit">Sign up</button>
                </form>
                <p className="signup-link">
                    Already have an account?  {" "}  <Link to="/log-in" style={{ color: "green", textDecoration: "none" }}>Log-In</Link>
                </p>
            </div>
        </div>
    </>
}

export default Sign;