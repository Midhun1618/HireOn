import React from "react";
import "./Inbox.css";

const Inbox = () => {
    return (
        <div className="jobdetails-body">
            <header className="dashboard-header">
                <div className="home-logo">
                    <span className="orange-text">H</span>
                    <span className="gray-texst">ire</span>
                    <span className="orange-text">On</span>
                </div>
                <div className="masked-header">
                    <input
                        type="text"
                        placeholder="Search for Jobs"
                        className="search-bar"
                    />
                    <div className="header-icons">
                        <div className="icon-circle" />
                        <div className="icon-circle" />
                        <div className="icon-circle" />
                    </div>
                </div>
                <div className="icon-avatar" />
            </header>
            <div className="inbox-container">
                {/* Sidebar */}
                <div className="inbox-sidebar">
                    <h2 className="inbox-title">Inbox</h2>
                    <div className="inbox-filters">
                        <button className="filter active">All</button>
                        <button className="filter">Read</button>
                        <button className="filter">Unread</button>
                    </div>
                    <div className="message-preview">
                        <div className="avatar"></div>
                        <div className="message-info">
                            <div className="username">UserName</div>
                            <div className="message-snippet">this was the previous message</div>
                        </div>
                        <div className="status-dot"></div>
                    </div>
                </div>

                {/* Chat Window */}
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="avatar large"></div>
                        <div className="chat-username">
                            UserName <span className="online-badge">Online</span>
                        </div>
                    </div>
                    <div className="chat-messages">
                        <div className="msg-left">This is a message from this user</div>
                        <div className="msg-right">This is a message from this user</div>
                        <div className="msg-right">This is a message from this user</div>
                        <div className="msg-left">This is a message from this user</div>
                        <div className="msg-right">This is a message from this user</div>
                    </div>
                    <div className="chat-input-area">
                        <div className="avatar small"></div>
                        <input className="chat-input" placeholder="Message here" />
                        <button className="chat-btn"></button>
                        <button className="chat-btn"></button>
                    </div>
                </div>

                {/* Extra Column (Empty for now) */}
                <div className="inbox-detail-pane"></div>
            </div>
        </div>
    );
};

export default Inbox;
