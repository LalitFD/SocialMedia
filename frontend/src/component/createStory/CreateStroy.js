import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import m from "./m.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateStory() {
    const userData = JSON.parse(sessionStorage.getItem("Social-User"));

    const [type, setType] = useState("image"); // default
    const [duration, setDuration] = useState(15);
    const [media, setMedia] = useState(null);

    const handleFileChange = (e) => {
        setMedia(e.target.files[0]);
    };

    const handleSubmit = async () => {
        if (!media) {
            toast.warn("Please select a file!");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("media", media);
            formData.append("type", type);
            formData.append("duration", duration);

            const res = await fetch("http://localhost:3000/story/create", {
                method: "POST",
                credentials: "include",
                body: formData,
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Story Created Successfully!");
                console.log("Created Story:", data.story);
                setMedia(null);
                setType("image");
                setDuration(15);
            } else {
                toast.error(data.error || "Failed to create story!");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong!");
        }
    };

    return (
        <div className="container">
            <div className="container" style={{ marginLeft: "-400px" }}>
                <Sidebar />
            </div>

            <div className="create-post-container">
                <h2 className="create-post-title">Create Story</h2>
                <p className="create-post-subtitle">Share your moment with friends</p>

                <div className="create-post-card">
                    {/* Profile Info */}
                    <div className="profile-info">
                        <img src={m} alt="Profile" className="profile-img" />
                        <div>
                            <h3 className="profile-name">{userData.name}</h3>
                            <p className="profile-username">{userData.email}</p>
                        </div>
                    </div>

                    {/* Type and Duration Inputs */}
                    <select
                        className="post-input"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        style={{ marginBottom: "10px" }}
                    >
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                    </select>

                    <input
                        type="number"
                        className="post-input"
                        value={duration}
                        min="5"
                        max="30"
                        onChange={(e) => setDuration(e.target.value)}
                        placeholder="Duration (seconds)"
                        style={{ marginBottom: "10px" }}
                    />

                    {/* File Upload + Button */}
                    <div className="post-actions">
                        <label htmlFor="file-upload" className="upload-icon">
                            <i className="bi bi-image"></i>
                        </label>
                        <input type="file" id="file-upload" hidden onChange={handleFileChange} />

                        <button className="publish-btn" onClick={handleSubmit}>Post Story</button>
                    </div>
                </div>
            </div>

            {/* Toast Container */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
}

export default CreateStory;
