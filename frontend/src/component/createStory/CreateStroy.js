import Sidebar from "../Sidebar/Sidebar";
import m from "./m.jpg";
function CreateStroy() {

    const userData = JSON.parse(sessionStorage.getItem("Social-User"));

    return <>
        <div className="container">
                        <div className="container" style={{ marginLeft: "-400px" }}><Sidebar /></div>

            {/* <Sidebar /> */}

            <div className="create-post-container">
                <h2 className="create-post-title">Create a Story</h2>
                <p className="create-post-subtitle">Share your thoughts with your friends</p>

                <div className="create-post-card">
                    {/* Profile Info */}
                    <div className="profile-info">
                        <img
                            src={m}
                            alt="Profile"
                            className="profile-img"
                        />
                        <div>
                            <h3 className="profile-name">{userData.name}</h3>
                            <p className="profile-username">{userData.email}</p>
                        </div>
                    </div>

                    {/* Input */}
                    <textarea
                        className="post-input"
                        placeholder="Write Something?"
                    ></textarea>

                    {/* Bottom row */}
                    <div className="post-actions">
                        <label htmlFor="file-upload" className="upload-icon">
                            <i className="bi bi-image"></i>
                        </label>
                        <input type="file" id="file-upload" hidden />

                        <button className="publish-btn">Post Story</button>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default CreateStroy;