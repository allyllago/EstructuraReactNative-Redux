/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { AppRegistry, View, StyleSheet, Text} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';

import { Provider, connect } from "react-redux";

import store from './src/store.js';
import Home from './src/Components/home.js';
import AppNavigator from './src/Configs/routes.js';

class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PrismaApp', () => Root);
