import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Music from '../screens/Music';
import Album from '../screens/Album';
import Recents from '../screens/Recents';
import Notifications from '../screens/Notifications';
import Activities from '../screens/Activities';

const routes = [
  {
    key: 'music',
    title: 'Bookings',
    focusedIcon: 'home-outline',
  },
  { key: 'albums', title: 'Activities', focusedIcon: 'calendar', },
 
  {
    key: 'notifications',
    title: 'Notifications',
    focusedIcon: 'bell-outline',
    
  },
  { key: 'recents', title: 'Menu', focusedIcon: 'view-grid-outline' },
  
];

const BottomTabBar = () => {
  const [index, setIndex] = React.useState(0);

  const renderScene = BottomNavigation.SceneMap({
    music: () => <Text>Music</Text>,
    albums: () => <Activities/>,
    recents: () =><Text>recents</Text>,
    notifications: () => <Text>notifications</Text>,
   
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTabBar;
