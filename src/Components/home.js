import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {View, Stylesheet, Text, TouchableOpacity} from 'react-native'
import {actionCreators} from '../Actions/actionCreators'
import { StackNavigator } from 'react-navigation';
import Segunda from './segunda.js';


function mapStateToProps (state){
	return {
		home: state.home
	}
}
function mapDispachToProps (dispatch){
	return bindActionCreators(actionCreators, dispatch)
}

class Cuco extends React.Component {
	constructor(props) {
    	super(props);
    }
componentWillMount (){
	this.props.show ()
}
static navigationOptions = {
    title: 'Welcome',
  };
	render(){
	console.log ("ESTADO", this.props.home)
	const { navigate } = this.props.navigation; 
		return (
			<View>
			<Text>ESTO ES LA HOME, PROBANDO NAVIGATION CON REDUX {this.props.home.msg}</Text>
			<View>
          	<TouchableOpacity onPress={() => navigate('Segunda')}>
            	<Text>Vamos a la Segunda</Text>
          	</TouchableOpacity>
        </View>
			</View>
		)
	}
}

const Home = connect(mapStateToProps, mapDispachToProps)(Cuco)

export default Home