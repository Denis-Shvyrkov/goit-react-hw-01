import FriendListItem from './FriendListItem';

const FriendList = ({ lists }) => {
  return (
    <ul>
      {lists.map(list => (
        <li key={list.id}>
          <FriendListItem friend={list} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
