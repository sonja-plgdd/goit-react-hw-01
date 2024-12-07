import clsx from 'clsx';
import styles from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles['friendlist-item']}>
      <img src={avatar} alt="Avatar" width="48" className={styles['friendlist-img']} />
      <p className={styles.friendname}>{name}</p>
      <p className={clsx(styles.status, isOnline ? styles.online : styles.offline)}>
        {isOnline === true ? `Online` : `Offline`}
      </p>
    </div>
  );
}

export default FriendListItem;
