import React from 'react';
import { TouchableOpacity, Image, Text, View, ImageBackground, StatusBar, Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import Dashboard from './MainDashboard.js';

class FlashScreen extends React.Component{

  constructor(){
    super();
    this.state={
      isVisible : true,
    }
  }

  Hide_Splash_Screen=()=>{
    this.setState({
      isVisible : false
    });
  }

  componentDidMount(){
    StatusBar.setHidden(true);
    var that = this;
    setTimeout(function(){
      that.Hide_Splash_Screen();
    }, 3000);
  }

  render()
  {
    let Splash_Screen = (

      <View style={styles.SplashScreen_RootView}>
        <Image source={require('../images/flashImage.png')}
        style={{width:'100%', height: '112%'}}/>
      <View style={styles.SplashScreen_ChildView}>
      </View>

      <TouchableOpacity
      activeOpacity = { 1 }
      style={styles.TouchableOpacity_Style}
      onPress={this.Hide_Splash_Screen} >

      <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/close_button.png'}}
      style={{width:0, height: 0}} />

      </TouchableOpacity>


      </View>




    )

      return(


        <View>

        <ImageBackground source={{uri:'http://blog.nutritioncenter.it/foto/1-1.png'}} style={{width: '100%', height: '100%'}}>

        <View style = { styles.MainContainer }>

        <Text style={{textAlign: 'center', bottom:25, color:'#ffff', fontSize:30}}> Welcome </Text>

        <TouchableOpacity
        onPress={()=>{
          console.log('Press from Mobile');
        }}
        style={styles.SubmitButtonStyle}
        activeOpacity = { 0.5 }

        >
        <Text style={{color:'#020202',textAlign:'center'}}> Sign in with Mobile Number </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{
          console.log('Press from Email');
        }}
        style={{width:300,
          marginTop:10,
          paddingTop:15,
          paddingBottom:15,
          marginLeft:30,
          marginRight:30,
          backgroundColor:'#f28787',
          borderRadius:27,
          borderWidth: 1,
          borderColor: '#fff'}}
          activeOpacity = { 0.5 }
          >
          <Text style={styles.TextStyle}> Sign in with Email </Text>
          </TouchableOpacity>

          <Text style={{marginTop:20, marginBottom:15, color:'#ffff'}}> OR </Text>

          <TouchableOpacity
          onPress={()=>{
            console.log('Press from Facebook');
          }}
          style={{width:300,
            marginTop:10,
            paddingTop:15,
            paddingBottom:15,
            marginLeft:30,
            marginRight:30,
            backgroundColor:'#3B5998',
            borderRadius:27,
            borderWidth: 1,
            borderColor: '#fff'}}
            activeOpacity = { 0.5 }
            >
            <Text style={styles.TextStyle}> Sign in with Facebook </Text>
            </TouchableOpacity>


            <TouchableOpacity
            onPress={()=>{
              console.log('Press from Google');
            }}
            style={{width:300,
              marginTop:10,
              paddingTop:15,
              paddingBottom:15,
              marginLeft:30,
              marginRight:30,
              backgroundColor:'#d34836',
              borderRadius:27,
              borderWidth: 1,
              borderColor: '#fff'}}
              activeOpacity = { 0.5 }
              >
              <Text style={styles.TextStyle}> Sign in with Google   </Text>
              </TouchableOpacity>


              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Dashboard')
              }}
              activeOpacity = { 1 }
              style={styles.TouchableOpacity_Style}
              >
              <Text style={{color:'#ffff'}}>Skip</Text>

              </TouchableOpacity>


              <TouchableOpacity
              onPress={()=>{
                console.log('Press from Create Account');
              }}
              activeOpacity = { 1 }
              style={{top:95}}
              >
              <Text style={{color:'#ffff'}}>Create an Account?</Text>

              </TouchableOpacity>

              {
                  (this.state.isVisible === true) ? Splash_Screen : null
              }

              </View>
              </ImageBackground>
              </View>


      );

}
}



const styles = StyleSheet.create(

  {
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: ( Platform.OS === 'android' ) ? 20 : 0
    },

    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex:1,
      margin: 10,
      position: 'absolute',
      width: '100%',
      height: '100%',

    },

    SplashScreen_ChildView:
    {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00BCD4',
      flex:1,
      margin: 20,
    },

    TouchableOpacity_Style:{

      width:30,
      height: 20,
      top:9,
      right:10,
      position: 'absolute'

    },
    SubmitButtonStyle: {
      width:300,
      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      marginLeft:30,
      marginRight:30,
      backgroundColor:'#fff',
      borderRadius:27,
      borderWidth: 1,
      borderColor: '#fff'
    },
    TextStyle:{
      color:'#fff',
      textAlign:'center',
    },
    MainContainer :{
     flex:1,
     paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
     alignItems: 'center',
     justifyContent: 'center',

     }

  });

export default FlashScreen;
