import "./Profile.css";
import { useNavigate } from "react-router-dom";
function Profile() {
    const nevigate = useNavigate();

    const handleLogin = () => {
        nevigate("/profile");
    }
    return <>
        <div className="container">
            <div className="sidebar">
                <div className="logo">Social</div>

                <div className="nav-item active">
                    <span className="nav-icon">🏠</span>
                    <span className="nav-text">Home</span>
                </div>

                <div className="nav-item">
                    <span className="nav-icon">🔍</span>
                    <span className="nav-text">Search</span>
                </div>

                <div className="nav-item">
                    <span className="nav-icon">🧭</span>
                    <span className="nav-text">Explore</span>
                </div>

                <div className="nav-item">
                    <span className="nav-icon">🎬</span>
                    <span className="nav-text">Reels</span>
                </div>

                <div className="nav-item">
                    <span className="nav-icon">💬</span>
                    <span className="nav-text">Messages</span>
                </div>

                <div className="nav-item">
                    <span className="nav-icon">🔔</span>
                    <span className="nav-text">Notifications</span>
                </div>

                <div className="nav-item">
                    <span className="nav-icon">➕</span>
                    <span className="nav-text">Create</span>
                </div>

                <div className="nav-item">
                    <span className="nav-icon">⋯</span>
                    <span className="nav-text">More</span>
                </div>

                <div className="nav-item">
                    <span className="nav-icon">👤</span>
                    <span className="nav-text" onClick={handleLogin}>Profile</span>
                </div>
            </div>

            <div className="main-content">
                <div className="profile-header">
                    <div className="profile-title">Profile</div>

                    <div className="profile-info">
                        <div className="profile-avatar">👤</div>

                        <div className="profile-details">
                            <div className="username-section">
                                <h2 className="username">being_lalit_0007</h2>
                                <button className="edit-btn">Edit profile</button>
                            </div>

                            <div className="stats">
                                <div className="stat">
                                    <span className="stat-number">18</span>
                                    <span className="stat-label">posts</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">445</span>
                                    <span className="stat-label">followers</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">400</span>
                                    <span className="stat-label">following</span>
                                </div>
                            </div>

                            <div className="bio">
                                <div className="name">Lalit Doriya</div>
                                <div className="description">
                                    Coding ZZZ..😴
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="posts-grid">
                    <div className="post-item"></div>
                    <div className="post-item"></div>
                    <div className="post-item selected"></div>
                    <div className="post-item"></div>
                    <div className="post-item"></div>
                    <div className="post-item"></div>
                    <div className="post-item"></div>
                    <div className="post-item"></div>
                </div>
            </div>
        </div>
    </>
}

export default Profile;