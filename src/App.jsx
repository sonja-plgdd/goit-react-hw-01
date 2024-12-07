import Profile from './components/Profile/Profile';
import userData from '/src/userData.json';
import './App.css';
import Friendlist from './components/FriendList/FriendList';
import friends from './friends.json';
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <div>
      <Profile {...userData} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
