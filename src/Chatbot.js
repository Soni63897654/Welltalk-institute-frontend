import React, { useState } from "react";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);

  const API = process.env.REACT_APP_API_URL;

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = message;

    setChat(prev => [...prev, { type: "user", text: userMsg }]);
    setMessage("");

    try {
      const res = await axios.post(API + "/chat", {
        message: userMsg,
      });

      setChat(prev => [
        ...prev,
        { type: "bot", text: res.data.reply }
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  // Emoji select handler
  const handleEmojiClick = (emojiData) => {
    setMessage(prev => prev + emojiData.emoji);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* Sidebar */}
      <div style={{
        width: "250px",
        background: "#2c2f48",
        color: "white",
        padding: "20px"
      }}>
        <h3>🤖 AI Chat</h3>
        <button style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          background: "#4e54c8",
          color: "white",
          border: "none"
        }}>
          + New Chat
        </button>
      </div>

      {/* Chat Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Header */}
        <div style={{
          padding: "15px",
          borderBottom: "1px solid #ccc",
          fontWeight: "bold"
        }}>
          Chat
        </div>

        {/* Messages */}
        <div style={{
          flex: 1,
          padding: "15px",
          overflowY: "auto",
          background: "#f5f5f5"
        }}>
          {chat.map((c, i) => (
            <div
              key={i}
              style={{
                textAlign: c.type === "user" ? "right" : "left",
                marginBottom: "10px"
              }}
            >
              <span style={{
                display: "inline-block",
                padding: "10px",
                borderRadius: "10px",
                background: c.type === "user" ? "#4e54c8" : "#ddd",
                color: c.type === "user" ? "white" : "black",
                maxWidth: "60%"
              }}>
                {c.text}
              </span>
            </div>
          ))}
        </div>

        {/* Input */}
        <div style={{
          display: "flex",
          padding: "10px",
          borderTop: "1px solid #ccc",
          position: "relative"
        }}>

          {/* Emoji Button */}
          <button
            onClick={() => setShowEmoji(!showEmoji)}
            style={{
              marginRight: "5px",
              padding: "10px"
            }}
          >
            😊
          </button>

          {/* Emoji Picker */}
          {showEmoji && (
            <div style={{
              position: "absolute",
              bottom: "60px",
              left: "10px"
            }}>
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}

          <input
            type="text"
            placeholder="Type message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              flex: 1,
              padding: "10px"
            }}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button
            onClick={sendMessage}
            style={{
              padding: "10px 15px",
              background: "#4e54c8",
              color: "white",
              border: "none"
            }}
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}

export default Chatbot;