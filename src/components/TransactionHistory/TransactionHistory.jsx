import PropTypes from 'prop-types';
import {
  TransactionHistoryTag,
  Thead,
  Tr,
  Td,
  Th,
} from './TransactionHistory.styled';

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTag>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <tbody>
        {items.map(item => (
          <Tr key={item.id}>
            <Td>{ucFirst(item.type)}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </Tr>
        ))}
      </tbody>
    </TransactionHistoryTag>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
