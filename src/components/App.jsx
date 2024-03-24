import Profile from './Profile';
import FriendList from './FriendList';
import userData from '../userData.json';
import friends from '../friends.json';
import TaransactionHistory from './TransactionHistory';
import transactions from '../transactions.json';

function App() {
  return (
    <>
      <div>
        <Profile data={userData[0]} />
      </div>
      <div>
        <FriendList lists={friends} />
      </div>
      <div>
        <TaransactionHistory items={transactions} />
      </div>
    </>
  );
}

export default App;
