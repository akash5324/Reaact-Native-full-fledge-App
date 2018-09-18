
require('create-react-class');
import React,{ Component } from 'react';
import { StyleSheet, Platform, View, Text, Image,Alert, TouchableOpacity,TextInput, ImageBackground, ScrollView, StatusBar,  BackHandler } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right, Footer} from 'native-base';

export default class PhoneAuthTest extends Component {
  constructor(props) {
    super(props);
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      validUser:false,
      message: '',
      codeInput: '',
      phoneNumber: '+91',
      confirmResult: null,
    };
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

  signIn = () => {
    const { phoneNumber } = this.state;
    this.setState({ message: 'Sending code ...' });

  firebase.auth()
  .verifyPhoneNumber(phoneNumber)
  .on('state_changed', (phoneAuthSnapshot) => {
    
    switch (phoneAuthSnapshot.state) {
      
      case firebase.auth.PhoneAuthState.CODE_SENT: // or 'sent'

        firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => this.setState({ confirmResult, message: 'OTP  has been sent!' }))
      .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
      
        break;
      case firebase.auth.PhoneAuthState.ERROR: // or 'error'
        Alert.alert('oops! unexpected error Occurred');
        break;


      case firebase.auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT: // or 'timeout'
        console.log('auto verify on android timed out');
      
        break;
      case firebase.auth.PhoneAuthState.AUTO_VERIFIED: 

        const { verificationId, code } = phoneAuthSnapshot;
        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);

        const { codeInput, confirmResult } = this.state;

            if (confirmResult && codeInput.length) {
              confirmResult.confirm(codeInput)
                .then(() => {
                  this.setState({ message: 'Code Confirmed!' });
                  this.setState({validUser:true});

        })
        .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
    }
       
        break;
    }
  }, (error) => {
    
    console.log(error);
    console.log(error.verificationId);
  }, (phoneAuthSnapshot) => {

    console.log(phoneAuthSnapshot);
  })
  };

  // confirmCode = () => {
  //   const { codeInput, confirmResult } = this.state;

  //   if (confirmResult && codeInput.length) {
  //     confirmResult.confirm(codeInput)
  //       .then(() => {
  //         this.setState({ message: 'Code Confirmed!' });
  //         this.setState({validUser:true});

  //       })
  //       .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
  //   }
  // };

  renderPhoneNumberInput() {
   const { phoneNumber } = this.state;

    return(
      <ScrollView>
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex:1}}>
                        <Image source={require('../images/signup/signup.png')} style={{width:'100%',height:300}}/>
                    </View>
                    <View style={{flex:1, marginTop:20, alignItems:'center'}}> 
                        <TextInput
                        placeholder=' Enter the Mobile Number'
                        placeholderTextColor='grey'
                        onChangeText={value => this.setState({ phoneNumber: value })}
                         value={phoneNumber}
                        style={styles.textinput}/>

                        <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={this.signIn} >
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View> 
           </ScrollView>
    );
  }

  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;

    return (
      <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
    );
  }

  renderVerificationCodeInput() {
    const { codeInput } = this.state;
    return (
        <ScrollView>
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex:1}}>
                        <Image source={require('../images/signup/signup.png')} style={{width:'100%',height:300}}/>
                    </View>
                    <View style={{flex:1, marginTop:20, alignItems:'center'}}> 
                        <TextInput
                        placeholder=' Enter the OTP sent Mobile Number'
                        placeholderTextColor='grey'
                         onChangeText={value => this.setState({ codeInput: value })}
                         value={codeInput}
                        style={styles.textinput}/>

                        <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={this.confirmCode}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>      
                    </View>
                </View> 
           </ScrollView>
    );
  }

  render() {
    const { validUser, confirmResult } = this.state;
    return (
      <View style={{ flex: 1 }}>

        {validUser===false && !confirmResult && this.renderPhoneNumberInput()}

        {this.renderMessage()}

        {validUser===false&& confirmResult && this.renderVerificationCodeInput()}

        {validUser===true && this.props.navigation.navigate('fillDetails')}
      </View>
    );
  }
}


const styles = StyleSheet.create({

    textinput:{
        width:'70%',
        paddingHorizontal:16,
        fontSize:16,
        marginTop:5,
    },
    button:{
        width:'65%',
        backgroundColor:'#EF5350',
        borderRadius:20,
        marginTop:30,
        alignItems:'center',
    },
    buttonText:{
        color:'white',
        fontSize:16,
        paddingTop:10,
        paddingBottom:10
    },
    foot:{
      marginTop:'5%'
    }

});