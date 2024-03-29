import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import userData from '../userData.json';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';
import ac from './App.module.css';

function App() {
  return (
    <div className={ac.container}>
      <Profile data={userData[0]} />
      <FriendList lists={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
