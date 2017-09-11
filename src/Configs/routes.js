import { StackNavigator } from 'react-navigation';

import Home from '../Components/home.js'; 
import Segunda from '../Components/segunda.js'
const AppNavigator = StackNavigator ({
  Home: { screen: Home },
  Segunda: {screen: Segunda},
});

export default AppNavigator;