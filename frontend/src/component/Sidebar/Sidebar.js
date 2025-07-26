import Message from "../MessagePage/Message";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";


function Sidebar() {
    const nevigate = useNavigate();

    const handleMesssage = () => {
        nevigate("/Message");
    }
    const handleReel = () => {
        nevigate("/reel");
    }



    return <>
        <div className="sidebar" style={{ height: "585px", marginLeft: "-2px" }}>
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

            <button className="sidebar-item" onClick={handleReel}>
                <span className="sidebar-item-icon">🎬</span>
                Reels
            </button>

            <button className="sidebar-item" onClick={handleMesssage}>
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
        </div >
    </>
}

export default Sidebar;