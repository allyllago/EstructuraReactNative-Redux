import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {View, Stylesheet, Text} from 'react-native'
import {actionCreators} from '../Actions/actionCreators'

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
	console.log ("ESTADO", this.state)
	this.props.show ()
}
	render(){
		return (
			<View>
			<Text>ESTO ES LA HOME, PROBANDO NAVIGATION CON REDUX {this.props.home.msg}</Text>
			</View>
		)
	}
}

const Home = connect(mapStateToProps, mapDispachToProps)(Cuco)

export default Home