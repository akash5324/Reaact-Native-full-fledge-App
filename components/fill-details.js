require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image,Alert, TouchableOpacity,TextInput, ImageBackground, ScrollView, StatusBar,  BackHandler } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right, Footer,Picker,Thumbnail} from 'native-base';


export default class fillDetails extends React.Component{

     constructor(props) {
    super(props);
     this.state = {
      selected2: undefined
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}

  onValueChange2(value: string) {
    this.setState({
      selected2: value
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
                        placeholder='First Name'
                        placeholderTextColor='grey'
                        style={styles.textinput}/>
                        <TextInput
                        placeholder='Last Name'
                        placeholderTextColor='grey'
                        style={styles.textinput}/>
                        <TextInput
                        placeholder='Age'
                        placeholderTextColor='grey'
                        style={styles.textinput}/>

                        <TextInput
                        placeholder='weight'
                        placeholderTextColor='grey'
                        style={styles.textinput}/>

                        <TextInput
                        placeholder='Height'
                        placeholderTextColor='grey'
                        style={styles.textinput}/>

                        <TextInput
                        placeholder='Alergies'
                        placeholderTextColor='grey'
                        style={styles.textinput}/>


                <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>


                        <TextInput
                        placeholder='Email Id'
                        placeholderTextColor='grey'
                        style={styles.textinput}/>

                        <TextInput
                        placeholder='Mobile Number'
                        placeholderTextColor='grey'
                        style={styles.textinput}/>

                        <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
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