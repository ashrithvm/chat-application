import ChatList from "./chatList/chatList.jsx";
import UserInfo from "./userInfo/UserInfo.jsx";
import "./list.css";

const List = () => {
    return (
        <div className="list">
            <UserInfo/>
            <ChatList/>
        </div>
    )
}

export default List;