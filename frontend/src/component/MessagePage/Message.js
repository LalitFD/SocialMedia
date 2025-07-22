import "./Message.css";

function Message() {
    return (
        <>
            <div className="message-container">
                <div className="sidebar-column">
                    <div className="sidebar-icons">
                        <button>🏠</button>
                        <button>🔍</button>
                        <button>🎵</button>
                        <button>🎬</button>
                        <button>💬</button>
                        <button>🔔</button>
                        <button>➕</button>
                        <button>⋯</button>
                        <button>👤</button>
                    </div>
                </div>

                <div className="chat-list-column">
                    <div className="chat-header">being_lalit_007</div>
                    <input type="text" placeholder="🔍 Search" className="search-bar" />
                    <div className="message-list-label">Message ...</div>
                    <div className="chat-list">
                        <div className="chat-item">
                            <div className="chat-avatar"></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                        <div className="chat-item">
                            <div className="chat-avatar"></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                        <div className="chat-item">
                            <div className="chat-avatar"></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                        <div className="chat-item">
                            <div className="chat-avatar"></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                        <div className="chat-item">
                            <div className="chat-avatar"></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                        <div className="chat-item">
                            <div className="chat-avatar"></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                        <div className="chat-item">
                            <div className="chat-avatar"></div>
                            <span>Rohit_Arwal_767</span>
                        </div>
                    </div>
                </div>

                <div className="chat-window-column">
                    <div className="chat-topbar">
                        <div className="chat-avatar-large"></div>
                        <span className="chat-username">Rohit_Arwal_767</span>
                        <div className="chat-actions">
                            <span>📞</span>
                            <span>📹</span>
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
