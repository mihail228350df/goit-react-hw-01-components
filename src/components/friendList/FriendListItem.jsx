import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BsFillDiamondFill } from 'react-icons/bs';

const StyledFriendListItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: ${p => p.theme.colors.white};
  padding: 10px;
  box-shadow: 10px 5px 5px red;
  img {
    margin-left: 20px;
  }

  p {
    margin-left: 20px;
  }
`;

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <StyledFriendListItem className="item">
      <span className="status">
        <BsFillDiamondFill color={isOnline ? 'green' : 'red'} />
      </span>
      <img className="avatar" src={avatar} alt={`${name} avatar`} width="48" />
      <p className="name">{name}</p>
    </StyledFriendListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
