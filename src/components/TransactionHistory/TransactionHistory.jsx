import css from './TransactionHistory.module.css';

const TaransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr className={css.headRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.row} key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TaransactionHistory;
