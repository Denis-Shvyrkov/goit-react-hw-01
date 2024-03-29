import pc from './Profile.module.css';

const Profile = ({ data: { avatar, username, tag, location, stats } }) => {
  return (
    <div className={pc.card}>
      <div className={pc.userSection}>
        <img src={avatar} alt={username} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={pc.statsSection}>
        <li className={pc.stats}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={pc.stats}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={pc.stats}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
