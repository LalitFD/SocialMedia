import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";
import pp from "./water.jpeg"
import { useNavigate } from "react-router-dom";
import mahakal from "./m.jpg";
import axios from "axios";
import EditProfile from "../editProfile/EditProfile";

function Profile() {
    const nevigate = useNavigate();

    const userData = JSON.parse(sessionStorage.getItem("Social-User"));
    console.log("Data", userData.name)

    // const handleLogin = () => {
    //     nevigate("/profile");
    // }

    // const [user, setUser] = useState(null);

    // useEffect(() => {x
    //     const fetchProfile = async () => {
    //         try {
    //             const res = await axios.get("http://localhost:3000/profile", {
    //                 withCredentials: true
    //             });
    //             setUser(res.data.userProfile);
    //             console.log(res.data.userProfile);
    //         } catch (err) {
    //             console.error("Error fetching profile:", err);
    //         }
    //     };

    //     fetchProfile();
    // }, []);


    const [posts, setPosts] = useState([]);
    console.log("all posts", posts);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/getAllPost");
                console.log(response.data.posts.media);
                console.log(response.data.posts);
                setPosts(response.data.posts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);


    const handleLogOut = () => {
        sessionStorage.setItem("Social-User", "");
        sessionStorage.clear();
        nevigate("/");
    }



    return <>
        <div className="container" style={{ marginLeft: "-2px" }}>
            <Sidebar />

            <div className="main-content" >
                <div className="profile-header" style={{ height: "250px" }}>
                    <div className="profile-title">Profile</div>



                    <div className="profile-info">
                        <div className="profile-avatar" style={{ position: "relative", top: "-20px" }}>

                            <img
                                src={mahakal}
                                alt="Profile"
                                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                            />

                        </div>

                        <div className="profile-details">
                            <div className="username-section">
                                <h2 className="username bg-danger" >{userData.username}</h2>
                                <button className="edit-btn" onClick={() => nevigate("/EditProfile")}>Edit profile</button>
                                <button className="edit-btn" onClick={handleLogOut} style={{ backgroundColor: "#443736" }}>LogOut</button>

                            </div>

                            {/* Stats */}
                            <div className="stats">
                                <div className="stat">
                                    <span className="stat-number">{userData.posts?.length || 15}</span>
                                    <span className="stat-label">posts</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">{userData.followers?.length || 455}</span>
                                    <span className="stat-label">followers</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">{userData.following?.length || 400}</span>
                                    <span className="stat-label">following</span>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="bio">
                                <div className="name" >{userData.name}</div>
                                <div className="description">{userData.bio || "bio Coding  ZZZ..😊"}</div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="Posts-header" style={{ height: "250px" }}>


                    <div
                        className="AllPost"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between", // 3 posts evenly space
                            marginBottom: "20px"
                        }}
                    >
                        {posts.map((post, index) => (
                            <div
                                className="post"
                                key={index}
                                style={{
                                    width: "33.33%", // exactly 3 per row
                                    boxSizing: "border-box",
                                    padding: "5px" // spacing between images
                                }}
                            >
                                <img
                                    src={pp}
                                    alt=""
                                    style={{
                                        width: "100%",
                                        height: "200px",
                                        objectFit: "cover",
                                        borderRadius: "8px"
                                    }}
                                />
                            </div>
                        ))}
                    </div>


                </div>


            </div>




        </div>
    </>
}

export default Profile;