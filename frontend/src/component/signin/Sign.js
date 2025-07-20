import "./Sign.css";
import loginImage from "./img.png"

function Sign() {
    return <>
        <div className="login-page">
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
                <h2 style={{ color: "black" }}>Sign UP</h2>
                <form>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Enter Email" />
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Create Password" />
                    <button type="submit">Sign up</button>
                </form>
                <p className="signup-link">
                    Already have an account? <span>Login</span>
                </p>
            </div>
        </div>
    </>
}

export default Sign;