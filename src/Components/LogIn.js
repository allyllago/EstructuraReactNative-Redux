import React, { Component } from 'react';
import { Dimensions, Text, View, TouchableHighlight, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';


class Login extends Component {
  constructor (props) {
    super(props);
    this.state= {
      username: '',
      password: '',
      user: {},
      unauth: false,
      token: '',
    };
   this.login = this.login.bind(this)
  };

  static navigationOptions = {
    tabBarVisible: false,
  };

  login(){
    const {username, password} = this.state;

    return fetch('https://prisma-musimundo-qa.azurewebsites.net/api/token', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: username, password})
   }).then(response => { 
      
      if(response.ok){
           response.json()
            .then(data => {
              this.setState({user: data, username: username, password: '', unauth: false, token: data.token})
              // if(data.ok){
              // this.props.navigation.navigate('Menu', {data: this.state.user})
              // }
              console.log("token", this.state)
            })
        }
        
        else if(!response.ok){
          console.log('err:', response)
          this.setState({unauth: true})
        }
      
      } 
    )
    .catch((error) => {console.error(error)});
  }

  // Unauthorized(){
  //     if(this.state.unauth){
  //       return (
          
  //         <TouchableOpacity activeOpacity= {0.5} >
  //           <View style= {styles.unauth}>
  //             <Text style= {styles.buttonText}>Incorrect username or password.</Text>
  //           </View>
  //         </TouchableOpacity>

  //         )
  //     }
  //   }

  render (){
    const { navigate } = this.props.navigation;
    return (
    <View style= {styles.container}>
      <View style= {styles.imageContainer}>
        <Image
          style= {styles.logo}
          source= {require('../Configs/Logo.png')}
          resizeMode= "contain"
        />
      </View>
      <View style= {styles.inputContainer} >
      
        <TextInput
          style= {styles.input}
          placeholder= "Usuario"
          selectionColor= "#1ab394"
          onChangeText= {(username)=> this.setState({username})}
          value= {this.state.username}
        />
        <TextInput 
          style= {styles.input}
          placeholder= "Password"
          secureTextEntry
          selectionColor= "#1ab394"
          onChangeText= {(password)=> this.setState({password})}
          value= {this.state.password}
        />
        <TouchableOpacity 
          style = {styles.button}
          activeOpacity= {0.5} onPress={this.login}>
          <View >
            <Text style= {styles.textButton}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    width: Dimensions.get('window').width
  },
  imageContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width
  },
  logo: {
    flex:0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    paddingTop: 15,
    width: Dimensions.get('window').width - 25,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1ab394',
    width: Dimensions.get('window'). width -31,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 3, elevation: 3
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
export default Login;