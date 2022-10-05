import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { StyledFriendList } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => { 
    return (
        <StyledFriendList>
            {friends.map(friend => (
                <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
            ))}
        </StyledFriendList>
    )
}

