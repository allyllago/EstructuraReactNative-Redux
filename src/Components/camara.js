import React, {Component} from 'react'

import {View, Stylesheet, Text, TouchableOpacity, Image} from 'react-native'
import { StackNavigator } from 'react-navigation';
import Segunda from './segunda.js';
import ImagePicker from 'react-native-image-crop-picker'

class Camara extends Component {
	constructor(props) {
    	super(props);
    	this.OpenCamara = this.OpenCamara.bind(this);
    	// this.Crop= this.Crop.bind(this)
    }
static navigationOptions = {
    title: 'Camara',
  };
    ComponentWillMount(){
    	// this.openCamera()
    }

    OpenCamara(){
    	console.log("uno")
    	ImagePicker.openCamera({
      		width: 300,
      		height: 300,
      		cropping: true
    	}).then(image => {
    		console.log("anadadadadad",image);
    	}).catch((error)=>{console.log(error)})
    }

	// Crop (){ImagePicker.openCropper({
	// 	  path: 'my-file-path.jpg',
	// 	  width: 300,
	// 	  height: 400
	// 	}).then(image => {
	// 	  console.log(image);
	// 	})
	// }
	render(){
	 
		return (
			<View><TouchableOpacity onPress= {()=> {this.OpenCamara()}}>
			<Text>Hola</Text></TouchableOpacity></View>
			
		)
	}
}


export default Camara