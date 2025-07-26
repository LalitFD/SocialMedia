import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
function Profile() {
    const nevigate = useNavigate();

    const handleLogin = () => {
        nevigate("/profile");
    }

    return <>
        <div className="container" style={{ marginLeft: "-2px" }}>
            <Sidebar />

            <div className="main-content" >
                <div className="profile-header" style={{ height: "250px" }}>
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

                <div className="Posts-header" style={{ height: "250px" }}>
                    <div className="AllPost" style={{ marginBottom: "20px" }}>
                        <div className="post">
                            <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" alt="" style={{ background: "cover" }} />
                        </div>

                        <div className="post">
                            <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" alt="" style={{ background: "cover" }} />
                        </div>

                        <div className="post">
                            <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" alt="" style={{ background: "cover" }} />
                        </div>

                    </div>

                    <div className="AllPost">

                        <div className="post">
                            <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" alt="" style={{ background: "cover" }} />
                        </div>

                        <div className="post">
                            <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" alt="" style={{ background: "cover" }} />
                        </div>

                        <div className="post">
                            <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" alt="" style={{ background: "cover" }} />
                        </div>

                    </div>
                </div>


            </div>




        </div>
    </>
}

export default Profile;