import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return <>
        <div className="login-page" style={{ background: "linear-gradient(135deg, #5FD13C, #999999)" }}>
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
                <h3 style={{ color: "black" }}>Welcome again 👋</h3>
                <h2 style={{ color: "black" }}>Login</h2>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Enter Password" />
                    <button type="submit">LOGIN</button>
                </form>
                <p className="signup-link">
                    Don’t have an account? {" "} <Link to="/sign-up" style={{ color: "green", textDecoration: "none" }}>Sign Up</Link>
                </p>
            </div>
        </div>
    </>
}

export default Login;