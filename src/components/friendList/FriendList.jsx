import PropTypes from 'prop-types';

import FriendListItem from 'components/friendList/FriendListItem';
import { Box } from 'components/box/Box';

export default function FriendList({ friends }) {
  const friendsItem = friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    );
  });

  return (
    <Box
      as="ul"
      mt="50px"
      width="400px"
      ml="auto"
      mr="auto"
      pl="0"
      className="friend-list"
    >
      {friendsItem}
    </Box>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
