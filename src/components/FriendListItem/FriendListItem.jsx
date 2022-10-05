import { StyledFriendItem, StyledImg, StyledStatus } from 'components/FriendListItem/FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => { 
    return (
        <StyledFriendItem>
            <StyledStatus isOnline={isOnline}>{isOnline}</StyledStatus>
            <StyledImg src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </StyledFriendItem>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};