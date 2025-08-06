import Sidebar from "../Sidebar/Sidebar";
import "./discover.css";

function Discover() {
    return (
        <div className="discover-page">
            <div className="container" style={{ marginLeft: "-290px" }}><Sidebar /></div>


            {/* Main Content */}
            <div className="discover-main">
                <h2 className="discover-title">Search People</h2>
                <p className="discover-subtitle">
                    Connect with amazing people and grow your network
                </p>

                {/* Search Box */}
                <div className="search-box">
                    <i className="bi bi-search search-icon"></i>
                    <input
                        type="text"
                        placeholder="Search people by name, username, bio..."
                        className="search-input"
                    />
                    <button className="search-button">Search</button>
                </div>
            </div>
        </div>
    );
}

export default Discover;
