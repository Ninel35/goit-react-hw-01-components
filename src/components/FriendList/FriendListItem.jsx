import { Status } from './friend.styled';

const FriendListItem = ({friend}) => (
    <li key={friend.id} className="item">
        <Status isonline={friend.isOnline.toString()}>•</Status>
        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p className="name">{friend.name}</p>
    </li>
);
export default FriendListItem