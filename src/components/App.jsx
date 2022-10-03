import { UserProfile } from 'components/UserProfile/UserProfile'
import { Statistics } from 'components/Statistics/Statistics'
import user from 'user.json'
import data from 'data.json'

export const App = () => {
  return (
  <div>
      <UserProfile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} />
      <Statistics stats={data} title="UPLOAD STATS" />
  </div>
  );
};


