import "./detail.css"

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt=""/>
                <h2>John Doe</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt=""/>
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiERHFeAlrh53zyybznJqqOu0Sbm8L2HxKA&s" alt="" />
                                <span>photo_2024_2</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiERHFeAlrh53zyybznJqqOu0Sbm8L2HxKA&s" alt="" />
                                <span>photo_2024_2</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiERHFeAlrh53zyybznJqqOu0Sbm8L2HxKA&s" alt="" />
                                <span>photo_2024_2</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout">Logout</button>
            </div>
        </div>
    )
}

export default Detail;