import {Status, List} from './friend.styled'
const FriendList = ({ friends }) => (
    <List>
        {friends.map(friend => (
            <li key={friend.id} className="item">
                <Status isonline={friend.isOnline.toString()}>•</Status>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
        </li>))}
    </List>
);
export default FriendList;
