import FriendListItem from '/src/components/FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

function Friendlist({ friends }) {
  return (
    <ul className={styles.friendlist}>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
          </li>
        );
      })}
    </ul>
  );
}

export default Friendlist;
