import {NavigationActions} from 'react-navigation'
import { StackNavigator, addNavigationHelpers } from "react-navigation";
// import {} from '../Actions/navigation';
// import {Navigator from} 

function Navigation(state , action) {
	const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
}

export default Navigation;