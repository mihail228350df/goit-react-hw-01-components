import PropTypes from 'prop-types';

import TransactionHistoryItem from 'components/transactionHistory/transactionHistoryItem';
import { Box } from 'components/box/Box';

export default function TransactionHistory({ items }) {
  const transactionItems = items.map(({ id, type, amount, currency }) => {
    return (
      <TransactionHistoryItem
        key={id}
        type={type}
        amount={amount}
        currency={currency}
      />
    );
  });

  return (
    <Box
      as="table"
      background="#fff"
      mt="50px"
      ml="auto"
      mr="auto"
      width="400px"
      className="transaction-history"
    >
      <Box as="thead" background="#15c7df">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Box>

      <tbody>{transactionItems}</tbody>
    </Box>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
