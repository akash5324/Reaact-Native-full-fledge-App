import React from 'react';
import { TouchableOpacity, Image, Text, View, ImageBackground, StatusBar, Platform, StyleSheet, BackHandler } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class LoginSignup extends React.Component{
  
  static navigationOptions={
    header:null
  }

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
    BackHandler.exitApp()
    return true;
}

  render(){
    const { navigate } = this.props.navigation;
    return(

              <View>

              <ImageBackground source={require('../images/Welcome/loginsignup.png')} style={{width: '100%', height: '100%'}}>

              <View style = { styles.MainContainer }>

              <Text style={{textAlign: 'center', bottom:25, color:'#ffff', fontSize:30}}> Welcome </Text>

              {/*<TouchableOpacity
                            onPress={()=>navigate('otpLogin')}
                            style={styles.SubmitButtonStyle}
                            activeOpacity = { 0.5 }
              
                            >
                            <Text style={{color:'#020202',textAlign:'center'}}> Sign in with Mobile Number </Text>
              
                            </TouchableOpacity>}

                          */}

              <TouchableOpacity
              onPress={()=>navigate('emailLogin')}
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
{/*
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
*/}

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
                    onPress={()=>
                        this.props.navigation.navigate('Dash')
                      }
                    activeOpacity = { 1 }
                    style={styles.TouchableOpacity_Style}
                    >
                    <Text style={{color:'#ffff'}}>Skip</Text>

                    </TouchableOpacity>


                    <TouchableOpacity
                    onPress={()=>navigate('signup1')}
                    activeOpacity = { 1 }
                    style={{top:95}}
                    >
                    <Text style={{color:'#ffff'}}>Create an Account?</Text>

                    </TouchableOpacity>

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
