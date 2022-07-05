import StatisticsList from './statisticsList/statisticsList';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/transactionHistory';

import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactionData from '../data/transactions';

import { Box } from './box/Box';
import { Profile } from './profile/Profile.jsx';

export const App = () => {
  return (
    <Box as="main" background="blue" pt="50px" pb="50px">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <StatisticsList title="Upload stats" stats={data} />
      <StatisticsList stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactionData} />
    </Box>
  );
};
