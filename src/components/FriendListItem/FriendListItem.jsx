import PropTypes from 'prop-types';
import {
  Friend,
  AvatarImage,
  Name,
  Status,
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <Status>{isOnline}</Status>
      <AvatarImage src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Friend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
