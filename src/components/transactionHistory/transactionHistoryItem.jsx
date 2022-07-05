import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTableRow = styled.tr`
  td {
    text-align: center;
    padding: 2px 5px;
    border: 2px solid black;
  }
`;

export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <StyledTableRow>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </StyledTableRow>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
