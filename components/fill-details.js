require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image,Alert, TouchableOpacity,TextInput, ImageBackground, ScrollView, StatusBar,  BackHandler,AsyncStorage } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right, Footer,Picker,Thumbnail,DatePicker} from 'native-base';



export default class fillDetails extends React.Component{

     constructor(props) {
    super(props);
     this.state = {
      name:'',
      email:'',
      phone:'',
      password:'',
      height:'',
      weight:'',
      address:'',
      food:'',
      medical:'',
      clinic_id:3,
      super_clinic:2,
      dob:20
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}



 

componentDidMount() {
let keys=['name','email','phone','password']
      AsyncStorage.multiGet(keys).then((result) => {

           this.setState({ 
            name:result[0][1],

            email:result[1][1],

            phone:result[2][1],

            password:result[3][1]

             })
 
    });
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

onSubmit= async () =>{

  const {name,email,phone,password,height,weight,address,food,medical,clinic_id,super_clinic,dob}=this.state;

if((name&&email&&phone&&password&&weight&&address&&food&&medical&&clinic_id&&super_clinic&&dob)!=='')

{

var params = {

            name: this.state.name,
            email: this.state.email,
            password:this.state.password,
            phone:this.state.phone,
            height:this.state.height,
            weight:this.state.weight,
            address:this.state.address,
            food:this.state.food,
            medical:this.state.medical,
            clinic_id:this.state.clinic_id,
            super_clinic:this.state.super_clinic,
            dob:this.state.dob,
        };     
        var formData = new FormData();

        for (var k in params) {
            formData.append(k, params[k]);
        }

        fetch('http://13.229.140.216/index.php/User/add_patient', {
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

                  Alert.alert('data saved');
                 this.props.navigation.navigate('userSuccessLogin');  


              }
           
            else
            Alert.alert(responseJson['data']);
          })
          .catch((error) => {
            console.error(error);
          });


}
else{

 Alert.alert('oopps !!',
  "please fill all the fields");

}
    }
    
      render() {

          const { navigate } = this.props.navigation;
        return (
           
            <ScrollView>
        
                <View style={{flex:1, flexDirection:'column',marginBottom:10}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Thumbnail source={{ uri: 'http://www.stickpng.com/assets/images/580b585b2edbce24c47b254b.png' }} style={{marginTop:10,marginBottom:10,justifyContent:'center',alignItems:'center',height:150,width:150,borderWidth:2,borderColor:'silver',borderRadius:100}}/>          
                    </View>
                    <View style={{flex:1, marginTop:20, alignItems:'center'}}>
                        <TextInput
                        placeholder='Full Name'
                        placeholderTextColor='grey'
                        value={this.state.name}
                        editable={false} 
                        selectTextOnFocus={false}
                        style={styles.textinput}/>
                        <TextInput
                        placeholder='Email'
                        placeholderTextColor='grey'
                        editable={false} 
                        selectTextOnFocus={false}
                        value={this.state.email}
                        style={styles.textinput}/>

                        <TextInput
                        placeholder='phone'
                        placeholderTextColor='grey'
                        editable={false} 
                        selectTextOnFocus={false}
                        value={this.state.phone}
                        style={styles.textinput}/>

                        <TextInput
                        placeholder='Height'
                        placeholderTextColor='grey'
                        onChangeText={(height)=> this.setState({height})}
                        style={styles.textinput}/>

                        <TextInput
                        placeholder='weight'
                        placeholderTextColor='grey'
                         onChangeText={(weight)=> this.setState({weight})}
                        style={styles.textinput}/>

                        <TextInput
                        placeholder='Address'
                        placeholderTextColor='grey'
                         onChangeText={(address)=> this.setState({address})}
                        style={styles.textinput}/>

                        <TextInput
                        placeholder='Food Preferences'
                        placeholderTextColor='grey'
                         onChangeText={(food)=> this.setState({food})}
                        style={styles.textinput}/>

                        <TextInput
                        placeholder='Medical History'
                        placeholderTextColor='grey'
                         onChangeText={(medical)=> this.setState({medical})}
                        style={styles.textinput}/>

                      


                        <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={this.onSubmit}
                        >
                            <Text style={styles.buttonText}>Next</Text>
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