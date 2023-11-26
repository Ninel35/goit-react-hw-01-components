import css from './transaction.module.css';

const TransactionHistory = ({ items }) => (
  <table className={css.transaction_history} >
    <thead className={css.title}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td className={css.item_td}>{item.type}</td>
          <td className={css.item_td}>{item.amount}</td>
          <td className={css.item_td}>{item.currency}</td>
        </tr>
      ))}
  
    </tbody>
  </table>
);
export default TransactionHistory