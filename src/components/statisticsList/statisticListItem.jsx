import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledListInfoItem = styled.li`
  width: 90px;
  display: block;
  justify-content: space-between;
  border: 2px solid ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.secondary};
  text-align: center;
  span {
    display: block;
  }
`;

export default function StatisticListItem({ label, percentage }) {
  return (
    <StyledListInfoItem className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StyledListInfoItem>
  );
}

StatisticListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
