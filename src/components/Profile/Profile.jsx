import PropTypes from 'prop-types';

import { Box } from '../box/Box';
import {
  StyledAvatar,
  StyledUserName,
  StyledText,
  StyledListInfo,
  StyledListInfoItem,
  StyledListInfoItemSpan,
} from './Profile.styled';

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  const { followers, views, likes } = stats;

  return (
    <Box
      ml="auto"
      mr="auto"
      width="400px"
      boxShadow="10px 5px 5px red"
      className="profile"
    >
      <Box as="div" background="#fff" p={4} className="description">
        <StyledAvatar
          src={avatar}
          alt={`${username} avatar`}
          className="avatar"
        />
        <StyledUserName className="name">{username}</StyledUserName>
        <StyledText className="tag">{`@${tag}`}</StyledText>
        <StyledText className="location">{location}</StyledText>
      </Box>

      <StyledListInfo className="stats">
        <StyledListInfoItem>
          <StyledListInfoItemSpan className="label">
            Followers
          </StyledListInfoItemSpan>
          <StyledListInfoItemSpan className="quantity">
            {followers}
          </StyledListInfoItemSpan>
        </StyledListInfoItem>
        <StyledListInfoItem>
          <StyledListInfoItemSpan className="label">
            Views
          </StyledListInfoItemSpan>
          <StyledListInfoItemSpan className="quantity">
            {views}
          </StyledListInfoItemSpan>
        </StyledListInfoItem>
        <StyledListInfoItem>
          <StyledListInfoItemSpan className="label">
            Likes
          </StyledListInfoItemSpan>
          <StyledListInfoItemSpan className="quantity">
            {likes}
          </StyledListInfoItemSpan>
        </StyledListInfoItem>
      </StyledListInfo>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
