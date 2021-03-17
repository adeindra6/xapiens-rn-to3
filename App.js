import React, { Component } from 'react';
import { HomeScreen, LandingScreen, LoginScreen, RegisterScreen, ProfileScreen, DataScreen, DetailScreen } from './src/screens';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
      Home: HomeScreen,
      Login: LoginScreen,
      Register: RegisterScreen,
      Profile: ProfileScreen,
      Data: DataScreen,
      Detail: DetailScreen,
  },
  {
      initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 1000);
  }

  render() {
    const { loading } = this.state;
    return(
      <>
        {loading ? (
          <LandingScreen />
        ) : (
          <AppContainer />
        )}        
      </>
    );
  };
}

export default App;