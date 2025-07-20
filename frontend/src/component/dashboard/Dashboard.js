import "./Dashboard.css";

function Dashboard() {

    return <>
        <div className="instagram-container">
            <div className="sidebar" style={{ height: "585px", marginTop: "40px", marginLeft: "-2px" }}>
                <div className="logo">Social</div>

                <button className="sidebar-item active">
                    <span className="sidebar-item-icon">🏠</span>
                    Home
                </button>

                <button className="sidebar-item">
                    <span className="sidebar-item-icon">🔍</span>
                    Search
                </button>

                <button className="sidebar-item">
                    <span className="sidebar-item-icon">🧭</span>
                    Explore
                </button>

                <button className="sidebar-item">
                    <span className="sidebar-item-icon">🎬</span>
                    Reels
                </button>

                <button className="sidebar-item">
                    <span className="sidebar-item-icon">💬</span>
                    Messages
                </button>

                <button className="sidebar-item">
                    <span className="sidebar-item-icon">🔔</span>
                    Notifications
                </button>

                <button className="sidebar-item">
                    <span className="sidebar-item-icon">➕</span>
                    Create
                </button>

                <button className="sidebar-item">
                    <span className="sidebar-item-icon">⋯</span>
                    More
                </button>

                <button className="sidebar-item">
                    <span className="sidebar-item-icon">👤</span>
                    Profile
                </button>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Center Feed */}
                <div className="feed" style={{ height: "585px"}}>
                    {/* Stories Section */}
                    <div className="stories">
                        <div className="story">
                            <div className="story-circle">👤</div>
                            <div className="story-name">Lalit@</div>
                        </div>
                        <div className="story">
                            <div className="story-circle">👤</div>
                            <div className="story-name">Lalit@</div>
                        </div>
                        <div className="story">
                            <div className="story-circle">👤</div>
                            <div className="story-name">Lalit@</div>
                        </div>
                        <div className="story">
                            <div className="story-circle">👤</div>
                            <div className="story-name">Lalit@</div>
                        </div>
                        <div className="story">
                            <div className="story-circle">👤</div>
                            <div className="story-name">Lalit@</div>
                        </div>
                        <div className="story">
                            <div className="story-circle">👤</div>
                            <div className="story-name">Lalit@</div>
                        </div>
                    </div>

                    {/* Post 1 */}
                    <div className="post">
                        <div className="post-header">
                            <div className="post-user">
                                <div className="post-avatar">👤</div>
                                <div className="post-username">beinglalit_0007</div>
                            </div>
                            <button className="post-options">⋯</button>
                        </div>
                        <div className="post-image">🎨</div>
                        <div className="post-actions">
                            <button className="action-btn">❤️</button>
                            <button className="action-btn">💬</button>
                            <button className="action-btn">📤</button>
                        </div>
                    </div>

                    {/* Post 2 */}
                    <div className="post">
                        <div className="post-header">
                            <div className="post-user">
                                <div className="post-avatar">👤</div>
                                <div className="post-username">beinglalit_0007</div>
                            </div>
                            <button className="post-options">⋯</button>
                        </div>
                        <div className="post-image">🎨</div>
                        <div className="post-actions">
                            <button className="action-btn">❤️</button>
                            <button className="action-btn">💬</button>
                            <button className="action-btn">📤</button>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="right-sidebar">
                    {/* Profile Section */}
                    <div className="profile-section">
                        <div className="profile-avatar">👤</div>
                        <div className="profile-name">beinglalit_0007</div>
                    </div>

                    {/* Suggestions Header */}
                    <div className="suggestions-header">
                        <div className="suggestions-title">Suggested for you</div>
                        <a href="#" className="see-all">See All</a>
                    </div>

                    {/* Suggestion 1 */}
                    <div className="suggestion">
                        <div className="suggestion-user">
                            <div className="suggestion-avatar">👤</div>
                            <div className="suggestion-username">beinglalit_0007</div>
                        </div>
                        <button className="follow-btn">Follow</button>
                    </div>

                    {/* Suggestion 2 */}
                    <div className="suggestion">
                        <div className="suggestion-user">
                            <div className="suggestion-avatar">👤</div>
                            <div className="suggestion-username">beinglalit_0007</div>
                        </div>
                        <button className="follow-btn">Follow</button>
                    </div>

                    {/* Suggestion 3 */}
                    <div className="suggestion">
                        <div className="suggestion-user">
                            <div className="suggestion-avatar">👤</div>
                            <div className="suggestion-username">beinglalit_0007</div>
                        </div>
                        <button className="follow-btn">Follow</button>
                    </div>

                    {/* Footer Links */}
                    <div className="footer-links">
                        About • Help • Press • API • Jobs • Privacy • Terms<br />
                        Locations • Language • Meta Verified
                        <br /><br />
                        © 2024 Social from Meta
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Dashboard;