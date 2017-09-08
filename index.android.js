/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { AppRegistry, View, StyleSheet, Text} from 'react-native';

// import Index from './src/index.js'

import { Provider } from "react-redux";

import store from './src/store.js';
import Home from './src/Components/home.js'


export default Prueba = ()=> {
	console.log("CCCC", this.state)
  return(
    <Provider store={store}>
      <View>
            <Home />
      </View>
    </Provider>
  ) 
}


AppRegistry.registerComponent('PrismaApp', () => Prueba);

// export default Index

// import {Provider} from 'react-redux';


// import Home from './src/Components/home.js'
// export default class PrismaApp extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Segunda App con React-Native. Ahora con Redux!!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//     
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

