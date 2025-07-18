import React from "react";
import "./HomePage.css";


const HomePage = () => {
    return (
        <div className="homepage">

            <nav className="navbar">
                <h2 className="logo">Social<span>.</span></h2>
                <ul className="nav-links">
                    <li style={{ letterSpacing: "2px" }}>Home</li>
                    <li style={{ letterSpacing: "2px" }}>Services</li>
                    <li style={{ letterSpacing: "2px" }}>About Us</li>
                    <li style={{ letterSpacing: "2px" }}>Contact</li>
                </ul>
                <button className="login-btn">Login</button>
            </nav>


            <section className="hero">
                <div className="hero-text">
                    <h1>
                        MEET SOCIAL media <br /> expert in <span className="green">tzz</span><span className="dot">.</span>
                    </h1>
                    <p style={{ letterSpacing: "2.5px" }}>
                        Efficiently handle your social media accounts with Agorapulse's inbox,
                        helping you stay organized, save time, and <br />
                        manage your channels with ease.
                    </p>
                    <div className="hero-buttons">
                        <button className="register">Register Now</button>
                        <button className="message"><i className="bi bi-chat-left" style={{ color: "black" }}></i> Message</button>
                    </div>
                    <div className="profile-icons">
                        <i className="bi bi-person-circle user-icon"></i>
                        <i className="bi bi-person-circle user-icon"></i>
                        <i className="bi bi-person-circle user-icon"></i>
                        <i className="bi bi-person-circle user-icon"></i>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/images/p1.png" alt="Graph chart" style={{ width: "90%" }} />
                    <div class="social-icons">
                        <i class="bi bi-facebook social-icon icon-facebook"></i>
                        <i class="bi bi-instagram social-icon icon-instagram"></i>
                        <i class="bi bi-youtube social-icon icon-youtube"></i>
                        <i class="bi bi-tiktok social-icon icon-tiktok"></i>
                        <i class="bi bi-music-note-beamed social-icon icon-music"></i>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HomePage;
