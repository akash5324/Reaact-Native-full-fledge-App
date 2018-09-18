import React from 'react';
import { Image, View, StatusBar, StyleSheet,AsyncStorage ,ActivityIndicator,Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import app from '../App.js';


export default class Splash extends React.Component{

  constructor() {
    super();
    this.state = { hasToken: false,isLoaded: false };
  }

  static navigationOptions={
    header:null
  }

componentDidMount(){

        AsyncStorage.getItem('user_id').then((item) => {

           this.setState({ hasToken:item !==null, isLoaded: true })
 
    });
 
        setTimeout(()=>{
          if(this.state.hasToken)
          {

             this.props.navigation.navigate('Dash');

          }

          if(!this.state.hasToken)
          {
            this.props.navigation.navigate('Welcome');
          }
     
    },3000)

    }

  render(){
    return(

      <View style={styles.SplashScreen}>
        <StatusBar hidden />
        <Image source={require('../images/flashImage.png')}
        style={{width:'100%', height: '100%'}}/>
      </View>
    );
  }

}


const styles = StyleSheet.create({

    SplashScreen:
    {
      justifyContent: 'center',
      flex:1,
      position: 'absolute',
      width: '100%',
      height: '100%',

    },

  });
