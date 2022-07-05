import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledListInfo } from '../profile/Profile.styled';

import StatisticListItem from './statisticListItem';

const StyledTitle = styled.h2`
  display: flex;
  width: 400px;
  height: 100px;
  background-color: ${p => p.theme.colors.white};
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
`;

const StyledStatisticsList = styled.section`
  width: 400px;
  background-color: blue;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export default function StatisticsList({ title, stats }) {
  const items = stats.map(({ id, label, percentage }) => {
    return <StatisticListItem key={id} label={label} percentage={percentage} />;
  });

  return (
    <StyledStatisticsList className="statistics">
      {title && (
        <StyledTitle className="title">{title.toUpperCase()}</StyledTitle>
      )}

      <StyledListInfo className="stat-list">{items}</StyledListInfo>
    </StyledStatisticsList>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
