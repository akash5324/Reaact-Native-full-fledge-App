require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image,Alert, TouchableOpacity,TextInput, ImageBackground, ScrollView, StatusBar,  BackHandler, AsyncStorage,KeyboardAvoidingView  } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right, Footer,DatePicker} from 'native-base';

export default class emailLogin extends React.Component{
   
     constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
     this.state = {
        ac_useremail: '',
        ac_password: ''
    }

}


componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
}

handlePress = async () => {
        
        var params = {
            ac_useremail: this.state.ac_useremail,
            ac_password: this.state.ac_password
        };     
        var formData = new FormData();

        for (var k in params) {
            formData.append(k, params[k]);
        }

        fetch('http://13.229.140.216/index.php/User/attempt_login', {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body:formData
      })
          .then((response) => response.json())
          .then((responseJson) => {
           
              if(responseJson['status'])
              {
                    this.saveItem('user_name',responseJson['data'].user_name),
                    this.saveItem('user_dob',responseJson['data'].user_dob)
                    this.saveItem('user_id',responseJson['data'].user_id),
                    this.saveItem('user_phone',responseJson['data'].user_phone),
                    this.saveItem('user_email',responseJson['data'].user_email),
                    this.saveItem('user_type',responseJson['data'].user_type),
                    this.saveItem('user_dob',responseJson['data'].user_dob),
                    this.saveItem('height',responseJson['track'].height),
                    this.saveItem('weight',responseJson['track'].weight),
                    this.saveItem('medical_history',responseJson['track'].medical_history),
                    this.saveItem('food_preference',responseJson['track'].food_preference),

                  this.props.navigation.navigate('welcomeScreen');
              }
            //this.saveItem('user_id',responseJson.user_id);
            else
            Alert.alert(responseJson['data']);
          })
          .catch((error) => {
            console.error(error);
          });
}

async saveItem(item, selectedValue) {
    try {
      //await AsyncStorage.setItem(item, selectedValue);
     await  AsyncStorage.multiSet([
    [item, selectedValue]
])
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }
// async getItem(){

//     try{

//         let value=await AsyncStorage.getItem('user_id');
//         Alert.alert(value);
//     }catch(error){

//         console.error('AsyncStorage error: ' + error.message)
//     }
// }


    render(){
          const { navigate } = this.props.navigation;
        return(

    <ScrollView keyboardShouldPersistTaps='always'>
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex:1}}>
                        <Image source={require('../images/emaillogin/emailLogin.png')} style={{width:'100%',height:300}}/>
                    </View>

                    <View style={{flex:12, marginTop:20, alignItems:'center'}}>
  
                    

                        <TextInput
                        placeholder='Email Id'
                        placeholderTextColor='grey'
                        onChangeText={(ac_useremail)=>this.setState({ac_useremail})}
                        style={styles.textinput}
                            />
                        <TextInput
                        placeholder='Password'
                        placeholderTextColor='grey'
                        onChangeText={(ac_password)=> this.setState({ac_password})}
                        style={styles.textinput}
                        />

                    
                        
                        <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                         onPress={this.handlePress.bind(this)}
                        >
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        activeOpacity={0.8}
                        >
                        <Text style={{marginTop:10}}>
                            Forgot Password?   
                        </Text>
                        </TouchableOpacity>
                        
                        <Text style={styles.foot}>
                            Didn't have account?   
                        </Text>

                        <TouchableOpacity onPress={()=>navigate('signup1')}>
                            <Text style={{color:'#FC8080', fontWeight:'bold'}}>SIGN UP</Text> 
                        </TouchableOpacity> 
                        
 


                    </View>
                    
                </View> 
          </ScrollView>


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