require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image,Alert, TouchableOpacity,TextInput, ImageBackground, ScrollView, StatusBar,BackHandler,AsyncStorage,Picker } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right, Footer,Thumbnail,DatePicker,Input,Item,Title,Form} from 'native-base';



export default class bookAppointment extends React.Component{

     constructor(props) {
    super(props);
     this.state = {
      name:'',
      email:'',
      phone:'',
      address:'',
      date:"2016-05-15",
      time:'00:00'
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}



 

// componentDidMount() {
// let keys=['name','email','phone','password']
//       AsyncStorage.multiGet(keys).then((result) => {

//            this.setState({ 
//             name:result[0][1],

//             email:result[1][1],

//             phone:result[2][1],

//             password:result[3][1]

//              })
 
//     });
// }

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

onSubmitt=()=>{

  Alert.alert(
  'Your booking is Confirmed',
  'We will get back to you soon !!',
  [
    {text: 'OK'},
  ],
  { cancelable: false }
)
}

onSubmit= async () =>{

  const {name,email,phone,address}=this.state;

if((name&&email&&phone&&address)!=='')

{

var params = {

            name: this.state.name,
            email: this.state.email,
            password:this.state.password,
            phone:this.state.phone,
            address:this.state.address
           
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
                  AsyncStorage.setItem('clientId',responseJson['client'].client_id);
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
           <Container>
                    <Header style={{backgroundColor:"green"}}>
          <Left style={{flex:1}}>

            <Button transparent onPress={()=>navigate('Dash')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body  style={{flex:1,alignSelf:'center',justifyContent:'center'}}>
            <Title>Fill in Details</Title>
          </Body>
          <Right style={{flex:1}}/>
        </Header>
            <ScrollView>
                        <View style={{flex:1, flexDirection:'column',marginBottom:10}}>
                    <View style={{flex:1, marginTop:20, alignItems:'center'}}>
                        <TextInput
                        placeholder='Full Name'
                         placeholderTextColor='#000'
                        onChangeText={(name)=> this.setState({name})} 
                        style={styles.textinput}/>
                        <TextInput
                        placeholder='Email'
                       placeholderTextColor='#000'
                        onChangeText={(email)=> this.setState({email})}
                        style={styles.textinput}/>

                        <TextInput
                        placeholder='phone'
                        placeholderTextColor='#000'
                        onChangeText={(phone)=> this.setState({phone})}
                        style={styles.textinput}/>

                        <TextInput
                        placeholder='Address'
                        placeholderTextColor='#000'
                         onChangeText={(address)=> this.setState({address})}
                        style={styles.textinput}/>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',   borderBottomColor: 'grey',
                        borderBottomWidth: 1,width:'65%'}}>
                        <DatePicker
                                  style={{width: 200}}
                                  date={this.state.date}
                                  mode="date"
                                  placeholder="select date"
                                  format="YYYY-MM-DD"
                                  minDate="2016-05-01"
                                  maxDate="2016-06-01"
                                  confirmBtnText="Confirm"
                                  cancelBtnText="Cancel"
                                  customStyles={{
                                  dateIcon: {
                                      position: 'absolute',
                                      left: 0,
                                      top: 4,
                                      marginLeft: 0
                                    },
                                    dateInput: {
                                      marginLeft: 36
                                    }
                                    // ... You can check the source to find the other keys.
                                  }}
                                  onDateChange={(date) => {this.setState({date: date})}}
                                />
                        </View> 
                         <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',   borderBottomColor: 'grey',
                        borderBottomWidth: 1,width:'65%'}}>
                       <Picker
                            selectedValue={this.state.time}
                            style={{ height: 50, width: 200}}
                            onValueChange={(itemValue, itemIndex) => this.setState({time: itemValue})}>
                            <Picker.Item label="choose Time" enabled={false} disabled/>
                            <Picker.Item label="10:00 AM" value="10:00 AM"/>
                            <Picker.Item label="12:00 PM" value="12:00 PM"/>
                            <Picker.Item label="2:00 PM" value="2:00 PM" />
                            <Picker.Item label="5:00 PM" value="5:00 PM" />
                            <Picker.Item label="7:00 PM" value="7:00 PM" />
                          </Picker>
                        </View>

        

                        <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={this.onSubmitt}
                        >
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                        
                    </View>
                    
                </View> 
                              </ScrollView>

                              </Container>
            
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