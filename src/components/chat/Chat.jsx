import "./chat.css"
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useState, useRef } from "react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const endRef = useRef(null)

    useEffect(()=>{
        endRef.current?.scrollIntoView({behavior:"smooth"})
    }, [])

    const handleEmoji = e => {
        setText(text + e.emoji)
        setOpen(false)
    }

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>

            
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eum repudiandae consequatur ut aliquam placeat nobis tempora pariatur,
                            non, unde at sit id blanditiis, asperiores libero illum obcaecati 
                            delectus magni laudantium?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://img.freepik.com/free-photo/village-background-asset-game-2d-futuristic-generative-ai_191095-2024.jpg" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eum repudiandae consequatur ut aliquam placeat nobis tempora pariatur,
                            non, unde at sit id blanditiis, asperiores libero illum obcaecati 
                            delectus magni laudantium?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eum repudiandae consequatur ut aliquam placeat nobis tempora pariatur,
                            non, unde at sit id blanditiis, asperiores libero illum obcaecati 
                            delectus magni laudantium?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>


            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" 
                placeholder="Type a  message..." 
                value={text}
                onChange={e=>setText(e.target.value)}
                />
                <div className="emoji">
                    <img src="./emoji.png"
                    alt=""
                    onClick={() => setOpen(prev=>!prev)}
                    />
                    <div className="picker">
                        <EmojiPicker open = {open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat;