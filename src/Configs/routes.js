import { StackNavigator } from 'react-navigation';

import Home from '../Components/home.js'; 
import Segunda from '../Components/segunda.js'
import Camara from '../Components/camara.js'

const AppNavigator = StackNavigator ({
  Home: { screen: Home },
  Segunda: {screen: Segunda},
  Camara: {screen: Camara}
});

export default AppNavigator;