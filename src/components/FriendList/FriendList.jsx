import {  List } from './friend.styled'
import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => (
    <List>
        {friends.map(friend => (
            <FriendListItem friend={friend}></FriendListItem>
            ))}
    </List>
);
export default FriendList;
