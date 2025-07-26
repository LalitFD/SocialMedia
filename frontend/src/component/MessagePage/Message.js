import "./Message.css";

function Message() {
    return (
        <>
            <div className="message-container">
                <div className="sidebar-column">
                    <div className="sidebar-icons">
                        <button><i class="bi bi-house-heart-fill" ></i></button>
                        <button><i class="bi bi-search"></i></button>
                        <button><i class="bi bi-music-note-beamed"></i></button>
                        <button><i class="bi bi-file-play-fill"></i></button>
                        <button><i class="bi bi-chat-left"></i></button>
                        <button><i class="bi bi-bell" style={{ color: "red" }}></i></button>
                        <button><i class="bi bi-plus-circle"></i></button>
                        <button><i class="bi bi-three-dots"></i></button>
                        <button><i class="bi bi-person-circle"></i></button>
                    </div>
                </div>

                <div className="chat-list-column">
                    <div className="chat-header">being_lalit_007</div>
                    <input type="text" placeholder="🔍 Search" className="search-bar" />
                    <div className="message-list-label">Message ...</div>
                    <div className="chat-list">
                        <div className="chat-item">
                            <div className="chat-avatar"><i class="bi bi-person" style={{ marginLeft: "9px", position: 'relative', top: "6px" }}></i></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                        <div className="chat-item">
                            <div className="chat-avatar"><i class="bi bi-person" style={{ marginLeft: "9px", position: 'relative', top: "6px" }}></i></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                        <div className="chat-item">
                            <div className="chat-avatar"><i class="bi bi-person" style={{ marginLeft: "9px", position: 'relative', top: "6px" }}></i></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                        <div className="chat-item">
                            <div className="chat-avatar"><i class="bi bi-person" style={{ marginLeft: "9px", position: 'relative', top: "6px" }}></i></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                        <div className="chat-item">
                            <div className="chat-avatar"><i class="bi bi-person" style={{ marginLeft: "9px", position: 'relative', top: "6px" }}></i></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                        <div className="chat-item">
                            <div className="chat-avatar"><i class="bi bi-person" style={{ marginLeft: "9px", position: 'relative', top: "6px" }}></i></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                        <div className="chat-item">
                            <div className="chat-avatar"><i class="bi bi-person" style={{ marginLeft: "9px", position: 'relative', top: "6px" }}></i></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                    </div>
                </div>

                <div className="chat-window-column">
                    <div className="chat-topbar">
                        <div className="chat-avatar"><i class="bi bi-person" style={{ marginLeft: "9px", position: 'relative', top: "6px" }}></i></div>
                        <span className="chat-username">Rohit_Arwal_767</span>
                        <div className="chat-actions">
                            <span><i class="bi bi-telephone"></i></span>
                            <span><i class="bi bi-camera-video"></i></span>
                        </div>
                    </div>
                    <div className="chat-body">
                        <span className="start-chat-text">Start a Conversation 💬</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Message;
