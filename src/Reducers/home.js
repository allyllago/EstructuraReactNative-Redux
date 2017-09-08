import {SHOW} from '../Actions/home';

function Home (state=[], action){
	switch (action.type) {
		case SHOW:
			return Object.assign({}, state, {
        msg: "Probando el bendito estado",
      });
	default:
      return state;
	}
}

export default Home