import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {View, Stylesheet, Text} from 'react-native'
import {actionCreators} from '../Actions/actionCreators'
import { StackNavigator } from 'react-navigation';

function mapStateToProps (state){
	return {
		home: state.home
	}
}
function mapDispachToProps (dispatch){
	return bindActionCreators(actionCreators, dispatch)
}

class Sec extends React.Component {
	constructor(props) {
    	super(props);
    }
// componentWillMount (){
// 	this.props.show ()
// }

static navigationOptions = {
    title: 'Segunda',
  };

	render(){
	console.log ("ESTADOIIIIIII", this.props.home)
		return (
			<View>
			<Text>Probando la segundaaaaaaa</Text>
			</View>
		)
	}
}

const Segunda = connect(mapStateToProps, mapDispachToProps)(Sec)

export default Segunda