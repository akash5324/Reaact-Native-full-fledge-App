require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image,Alert, TouchableOpacity,TextInput, ImageBackground, ScrollView, StatusBar,  BackHandler,AsyncStorage } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right, Footer,DatePicker} from 'native-base';


export default class signup1 extends React.Component{

     constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state={

        name:'',
        email:'',
        Password:'',
        ConfirmPassword:'',
        phone:'',
        firstage:false,
        codeInput:'',
        confirmResult:'',
        
    }

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

validate=()=>{
    if((this.state.name && this.state.email && this.state.password && this.state.ConfirmPassword && this.state.phone)!==''){


            if(this.state.password===this.state.ConfirmPassword){

                //async stoarge of details


                    this.saveItem('name',this.state.name);
                     this.saveItem('email',this.state.email);
                      this.saveItem('phone',this.state.phone);
                      this.saveItem('password',this.state.password)


                //

                this.setState({firstage:true})


         fetch('http://13.229.140.216/index.php/User/send_otp?phone='+this.state.phone, {
            method: 'GET',
            headers: {
              'Content-Type': 'multipart/form-data',
            }
            }).then((response) => response.json())
            .then((responseJson) => {


                    if(responseJson['status']){

                          this.setState({confirmResult:responseJson['data']})
                          Alert.alert(String(this.state.confirmResult));
           
                    }
                  

           })


            }

            else{

                Alert.alert(
        'Entered password and confirm password not same',
        'please check your password again',
        [
        ],
        { cancelable: true }
      )
            }

    }

    else{

         Alert.alert(
        'Incomplete credentials',
        'please fill all the fields',
        [
        ],
        { cancelable: true }
      )
    }
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

    verify=()=>{

               if(this.state.codeInput!==''){

               
                     if(this.state.codeInput == this.state.confirmResult){



                            this.props.navigation.navigate('fillDetails')

                        }
                        else{


                                Alert.alert(
                                        'oops!!',
                                        'Entered OTP is Wrong',
                                        [
                                        ],
                                        { cancelable: true }
                                      )

                        }

                }
                else{

                         Alert.alert(
                                        'oops!!',
                                        'please enter the OTP',
                                        [
                                        ],
                                        { cancelable: true }
                                      )

                }
               

            } 



    renderOtpVerify(){

        const {navigate}=this.props.navigation;

        const {phone}=this.state;

        return(


                 <ScrollView>
        
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex:1}}>
                        <Image source={require('../images/signup/signup.png')} style={{width:'100%',height:300}}/>
                    </View>
                    <View style={{flex:1, marginTop:20, alignItems:'center'}}> 

                        <Text>Otp has been sent to your</Text>
                        <Text style={{marginBottom:10}}>Mobile Number:{this.state.phone}</Text>
                        <TextInput
                        placeholder=' Enter the OTP sent'
                        placeholderTextColor='grey'
                        onChangeText={(codeInput)=> this.setState({codeInput})}
                        style={styles.textinput}/>

                        <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={this.verify}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>
                        
                    </View>
                    
                </View> 
           </ScrollView>

            );
    }

    renderSignUp(){

            const {navigate}=this.props.navigation;
        return(

        <ScrollView>
        
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex:1}}>
                        <Image source={require('../images/signup/signup.png')} style={{width:'100%',height:300}}/>
                    </View>
                    <View style={{flex:1, marginTop:20, alignItems:'center'}}>
                        <TextInput
                        placeholder='Full Name'
                        placeholderTextColor='grey'
                        onChangeText={(name)=> this.setState({name})}
                        style={styles.textinput}/>
                        <TextInput
                        placeholder='Email'
                        placeholderTextColor='grey'
                        onChangeText={(email)=> this.setState({email})}
                        style={styles.textinput}/>
                        <TextInput
                        placeholder='Mobile Number'
                        placeholderTextColor='grey'
                        onChangeText={(phone)=> this.setState({phone})}
                        style={styles.textinput}/>

                          <TextInput
                        placeholder='Password'
                        placeholderTextColor='grey'
                        onChangeText={(password)=> this.setState({password})}
                        style={styles.textinput}/>

                         <TextInput
                        placeholder='Confirm Password'
                        placeholderTextColor='grey'
                        onChangeText={(ConfirmPassword)=> this.setState({ConfirmPassword})}
                        style={styles.textinput}/>

                        <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={this.validate}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>

                        
                        <Text style={styles.foot}>
                            Already have an account?    
                        </Text>

                        <TouchableOpacity onPress={()=>navigate('emailLogin')}>
                            <Text style={{color:'#FC8080', fontWeight:'bold',marginBottom:10}}>SIGN IN</Text> 
                        </TouchableOpacity>
                        
                    </View>
                    
                </View> 
           </ScrollView>



            );
    }
    
      render() {

          const { navigate } = this.props.navigation;
          const {firstage}=this.state;
        return (


         <View style={{ flex: 1 }}>

        {firstage===false && this.renderSignUp()}

        {firstage==true &&this.renderOtpVerify()}

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
