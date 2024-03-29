import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ lists }) => {
  return (
    <ul className={css.list}>
      {lists.map(list => (
        <li className={css.item} key={list.id}>
          <FriendListItem friend={list} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
