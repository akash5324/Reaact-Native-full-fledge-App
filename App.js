import React from 'react';
import {StyleSheet, Text, View, Button, Image, ImageBackground,BackHandler} from 'react-native';
import { createDrawerNavigator, createStackNavigator, DrawerItems,createBottomTabNavigator } from 'react-navigation';
import {Content, Container, Header, Body, Icon} from 'native-base';
import Splash from './components/Splash.js';
import LoginSignup from './components/LoginSignup.js'
import Dash from './components/Dash.js';
import Plans from './components/Plans.js'
import signup1 from './components/signup1.js';
import emailLogin from './components/emailLogin.js';
import bmi from './components/bmi.js';
import SkipDash from './components/skipDash.js';
import diet from './components/diet';
import profilePage from './components/profilepage';
import referandearn from './components/referandearn';
import bmr from './components/bmr';
import bfp from './components/bfp';
import whr from './components/whr';
import recipies from './components/recipies';
import Profile from './components/profilepage';
import recipiesclicked from './components/recipiesclicked';
import meals from './components/meals'
import otpLogin from './components/otp-login'
import fillDetails from './components/fill-details';
import otpVerify from './components/otp-verify';

import Navi from './drawer';

export class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}

componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
}


  render(){
    return(
   <stack />

    );
  }
}




const stack = createStackNavigator({
  Initial:{
    screen:Splash
  },
  Welcome:{
      
        screen:LoginSignup
  },
  Dash:{
    screen:Navi,
    navigationOptions:{

      header:null

    }
  },

  emailLogin:{
    screen:emailLogin
  },
  signup1:{
    screen:signup1
  },

   'BMI Calculator':{

    screen:bmi
  },

  bmr:{
    screen:bmr
  },
  bfp:{
    screen:bfp
  },
  whr:{
    screen:whr
  },
  diet:{

    screen:diet
  },

  recipies:{

    screen:recipies
  },

  'recipies clicked':{

    screen:recipiesclicked
  },

  otpLogin:{

    screen:otpLogin
  },

  otpVerify:{

    screen:otpVerify
  },

  fillDetails:{

    screen:fillDetails
  }

});



 
export default stack;

