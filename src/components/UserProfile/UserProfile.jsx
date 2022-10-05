import { StyledProfileDiv, StyledDescrDiv, StyledImg, StyledName, StyledStatsList, StyledStatsItem, StyledQuantitySpan } from 'components/UserProfile/UserProfile.styled'
import PropTypes from 'prop-types';

export const UserProfile = ({ username, tag, location, avatar, followers, views, likes }) => {    
    return (
        <StyledProfileDiv>
            <StyledDescrDiv>
                <StyledImg
                    src={avatar}
                    alt="User avatar"
                    
                />
                <StyledName>{username}</StyledName>
                <p>@{tag}</p>
                <p>{location}</p>
            </StyledDescrDiv>
            <StyledStatsList>
                <StyledStatsItem>
                    <span>Followers</span>
                    <StyledQuantitySpan>{followers}</StyledQuantitySpan>
                </StyledStatsItem>
                <StyledStatsItem>
                    <span>Views</span>
                    <StyledQuantitySpan>{views}</StyledQuantitySpan>
                </StyledStatsItem>
                <StyledStatsItem>
                    <span>Likes</span>
                    <StyledQuantitySpan>{likes}</StyledQuantitySpan>
                </StyledStatsItem>
            </StyledStatsList>
        </StyledProfileDiv>
    );
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};