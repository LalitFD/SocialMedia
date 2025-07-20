import "./Login.css";
import loginImage from "./img.png"

function Login() {
    return <>
        <div className="login-page" style={{ background: "linear-gradient(135deg, #5FD13C, #999999)" }}>
            <div className="login-left">
                <h2 className="logo">Social</h2>
                <p>
                    Connect with the world <span style={{ color: "green" }}>instantly</span> join the ultimate <strong style={{ color: "green" }}>Social Hub.</strong>
                </p>
                <p className="subtext">
                    Stay updated, share moments and grow your network. <br />
                    Unlimited access to posts, reels, stories, and more – all in one place.
                </p>
                <img src={loginImage} alt="Login Visual" className="login-img" style={{ position: "relative", left: "75%", top: "-30%" }} />
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
                    Don’t have an account? <span>Sign Up</span>
                </p>
            </div>
        </div>
    </>
}

export default Login;