import css from './FriendListItem.module.css';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  // const statusClasses = clsx(css.status, {
  //   [css.online]: isOnline,
  //   [css.offline]: !isOnline,
  // });

  const statusClasses = isOnline ? css.online : css.offline;

  return (
    <div className={css.card}>
      <img className={css.img} src={avatar} alt={avatar} width="48" />
      <p className={css.userName}>{name}</p>
      <p className={statusClasses}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;
