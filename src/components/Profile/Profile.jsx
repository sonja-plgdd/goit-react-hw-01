import styles from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={styles.card}>
      <div className={styles['user-info']}>
        <img src={avatar} alt="User avatar" className={styles['user-img']} />
        <p className={styles.name}>{username}</p>
        <p className={styles['secondary-txt']}>@{tag}</p>
        <p className={styles['secondary-txt']}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles['stats-item']}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles['stats-item']}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles['stats-item']}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
