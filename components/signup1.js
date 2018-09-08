require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image,Alert, TouchableOpacity,TextInput, ImageBackground, ScrollView, StatusBar,  BackHandler } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right, Footer} from 'native-base';


export default class signup1 extends React.Component{

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
    
      render() {

          const { navigate } = this.props.navigation;
        return (
           
            <ScrollView>
        
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex:1}}>
                        <Image source={require('../images/signup/signup.png')} style={{width:'100%',height:300}}/>
                    </View>
                    <View style={{flex:1, marginTop:20, alignItems:'center'}}>
                        <TextInput
                        placeholder='Full Name'
                        placeholderTextColor='grey'
                        style={styles.textinput}/>
                        <TextInput
                        placeholder='Email'
                        placeholderTextColor='grey'
                        style={styles.textinput}/>
                        <TextInput
                        placeholder='Mobile Number'
                        placeholderTextColor='grey'
                        style={styles.textinput}/>

                        <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={
                            popup
                        }>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>

                        
                        <Text style={styles.foot}>
                            Already have an account?    
                        </Text>

                        <TouchableOpacity onPress={()=>navigate('emailLogin')}>
                            <Text style={{color:'#FC8080', fontWeight:'bold'}}>SIGN IN</Text> 
                        </TouchableOpacity>
                        
                    </View>
                    
                </View> 
           </ScrollView>
            
        );
      }
}


function popup(){
    Alert.alert(
        'OTP Sent',
        'Enter the OTP sent to your Email Id & Mobile Number',
        [
        ],
        { cancelable: true }
      )
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