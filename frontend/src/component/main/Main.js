import { useNavigate } from "react-router-dom";
import img from "./c.jpeg";
import mahakal from "./m.jpg";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
function Main() {

    return <>
        <Sidebar />
        <div className="dashboard-container" style={{ marginLeft: "300px" }}>
            <div className="dashboard-main-content">
                <div className="dashboard-feed">
                    <div className="dashboard-story-list">
                        <div className="dashboard-story-item">
                            <div className="dashboard-avatar-circle">
                                <img src={img} alt="Lalit" className="dashboard-story-img" />
                            </div>
                            <div className="dashboard-username-label">Lalit@</div>
                        </div>
                        <div className="dashboard-story-item">
                            <div className="dashboard-avatar-circle">
                                <img src={img} alt="Lalit" className="dashboard-story-img" />
                            </div>
                            <div className="dashboard-username-label">Lalit@</div>
                        </div>
                        <div className="dashboard-story-item">
                            <div className="dashboard-avatar-circle">
                                <img src={img} alt="Lalit" className="dashboard-story-img" />
                            </div>
                            <div className="dashboard-username-label">Lalit@</div>
                        </div>
                        <div className="dashboard-story-item">
                            <div className="dashboard-avatar-circle">
                                <img src={img} alt="Lalit" className="dashboard-story-img" />
                            </div>
                            <div className="dashboard-username-label">Lalit@</div>
                        </div>
                        <div className="dashboard-story-item">
                            <div className="dashboard-avatar-circle">
                                <img src={img} alt="Lalit" className="dashboard-story-img" />
                            </div>
                            <div className="dashboard-username-label">Lalit@</div>
                        </div>
                        <div className="dashboard-story-item">
                            <div className="dashboard-avatar-circle">
                                <img src={img} alt="Lalit" className="dashboard-story-img" />
                            </div>
                            <div className="dashboard-username-label">Lalit@</div>
                        </div>
                    </div>

                    <div className="dashboard-post-card">
                        <div className="dashboard-post-header">
                            <div className="dashboard-user-info">
                                <div className="dashboard-user-avatar">
                                    <img src={img} alt="Lalit" className="dashboard-story-img" />
                                </div>
                                <div className="dashboard-user-handle">beinglalit_0007</div>
                            </div>
                            <button className="dashboard-options-button">⋯</button>
                        </div>
                        <div className="dashboard-post-media">
                            <img src={mahakal} alt="Post" />
                        </div>
                        <div className="dashboard-post-controls">
                            <button className="dashboard-icon-btn">
                                <svg className="dashboard-heart-icon" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </button>
                            <button className="dashboard-icon-btn">
                                <svg className="dashboard-comment-icon" viewBox="0 0 24 24">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </button>
                            <button className="dashboard-icon-btn">
                                <svg className="dashboard-share-icon" viewBox="0 0 24 24">
                                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                    <polyline points="16,6 12,2 8,6" />
                                    <line x1="12" y1="2" x2="12" y2="15" />
                                </svg>
                            </button>
                        </div>
                        <div className="dashboard-post-stats">
                            <span className="dashboard-likes">524 likes</span>
                        </div>
                        <div className="dashboard-post-caption">
                            <span className="dashboard-username">beinglalit_0007</span>
                            <span className="dashboard-caption-text">Amazing view! 🌅 #photography #nature</span>
                        </div>
                    </div>
                </div>

                <div className="dashboard-right-sidebar">
                    <div className="dashboard-profile-section">
                        <div className="dashboard-profile-avatar">
                            <img src={img} alt="Profile" className="dashboard-profile-img" />
                        </div>
                        <div className="dashboard-profile-name">beinglalit_0007</div>
                    </div>

                    <div className="dashboard-suggestions-header">
                        <div className="dashboard-suggestions-title">Suggested for you</div>
                        <a href="#" className="dashboard-see-all">See All</a>
                    </div>

                    <div className="dashboard-suggestion">
                        <div className="dashboard-suggestion-user">
                            <div className="dashboard-suggestion-avatar">
                                <img src={img} alt="User" className="dashboard-suggestion-img" />
                            </div>
                            <div className="dashboard-suggestion-username">beinglalit_0007</div>
                        </div>
                        <button className="dashboard-follow-btn">Follow</button>
                    </div>

                    <div className="dashboard-suggestion">
                        <div className="dashboard-suggestion-user">
                            <div className="dashboard-suggestion-avatar">
                                <img src={img} alt="User" className="dashboard-suggestion-img" />
                            </div>
                            <div className="dashboard-suggestion-username">beinglalit_0007</div>
                        </div>
                        <button className="dashboard-follow-btn">Follow</button>
                    </div>

                    <div className="dashboard-suggestion">
                        <div className="dashboard-suggestion-user">
                            <div className="dashboard-suggestion-avatar">
                                <img src={img} alt="User" className="dashboard-suggestion-img" />
                            </div>
                            <div className="dashboard-suggestion-username">beinglalit_0007</div>
                        </div>
                        <button className="dashboard-follow-btn">Follow</button>
                    </div>

                    <div className="dashboard-suggestion">
                        <div className="dashboard-suggestion-user">
                            <div className="dashboard-suggestion-avatar">
                                <img src={img} alt="User" className="dashboard-suggestion-img" />
                            </div>
                            <div className="dashboard-suggestion-username">beinglalit_0007</div>
                        </div>
                        <button className="dashboard-follow-btn">Follow</button>
                    </div>

                    <div className="dashboard-footer-links">
                        About · Help · Press · API · Jobs · Privacy · Teams · Location · Verified
                    </div>

                    <div className="dashboard-messages-btn">
                        <svg className="dashboard-msg-icon" viewBox="0 0 24 24">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        Messages
                        <div className="dashboard-settings-icon">⚙️</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default Main;