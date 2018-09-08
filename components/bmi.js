require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image,Alert, TouchableOpacity,TextInput, ImageBackground, ScrollView, StatusBar,  BackHandler } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right, Footer, Picker} from 'native-base';

export default class bmi extends React.Component{



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
    


    state = {user: ''}
    updateUser = (user) => {
       this.setState({ user: user })
    }

    render(){
        return(
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, backgroundColor:'#ecefef'}}>

                    <View style={{height:500, marginTop:8, backgroundColor:'#ffff'}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{ width:'25%', height:100, alignItems:'center', marginTop:15}}>
                                <Text style={{fontSize:20,}}>Gender</Text>
                                <View style={{ flexDirection:'row', marginTop:5}}>
                                    <Image source={require('../images/Calculators/b.png')} style={{width:30, height:50}}/>
                                    <Image source={require('../images/Calculators/g.png')} style={{width:30, height:50}}/>
                                </View>
                            </View>
                            <View style={{ flex:1, height:100, alignItems:'center', marginTop:18}}>
                                <Text style={{fontSize:20,}}>Height</Text>
                                <TextInput style={{width:'80%', textAlign:'center', fontSize:20}} keyboardType='numeric'/>
                            </View>
                            <View style={{width:'25%', height:100, alignItems:'center',}}>
                            <Picker  selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{width:100}}>
                                <Picker.Item label = "Cm" value = "cm" />
                                <Picker.Item label = "Inch" value = "Inch" />
                            </Picker>
                            </View>
                        </View>
                            
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{ width:'25%', height:100, alignItems:'center', marginTop:15}}>
                                <Text style={{fontSize:20,}}>Age</Text>
                                <TextInput style={{ textAlign:'center', fontSize:20}} keyboardType='numeric'/>
                            </View>
                            <View style={{ flex:1, height:100, alignItems:'center', marginTop:18}}>
                                <Text style={{fontSize:20,}}>Weight</Text>
                                <TextInput style={{width:'80%', textAlign:'center', fontSize:20}} keyboardType='numeric'/>
                            </View>
                            <View style={{width:'25%', height:100, alignItems:'center',}}>
                                <Picker  selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{width:100}}>
                                    <Picker.Item label = "Kg" value = "Kg" />
                                    <Picker.Item label = "Lb" value = "Lb" />
                                </Picker>
                            </View>
                        </View>

                        <View style={{ flex:1}}>
                            <View style={{alignItems:'center'}}>
                                <Image source={require('../images/bmi.png')} style={{width:'100%', height:'100%'}}/>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop:8, height:230, backgroundColor:'#ffff', flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{ paddingLeft:10, paddingTop:15, paddingBottom:15, justifyContent:'space-between'}}>
                            <Text>Very Severely Underweight</Text>
                            <Text>Severely Underweight</Text>
                            <Text>Underweight</Text>
                            <Text>Normal</Text>
                            <Text>Overweight</Text>
                            <Text>Obese Class 1</Text>
                            <Text>Obese Class 2</Text>
                            <Text>Obese Class 3</Text>
                        </View>
                        <View style={{ paddingRight:10, paddingTop:15, paddingBottom:15, justifyContent:'space-between'}}>
                            <Text>{'< 16.0'}</Text>
                            <Text>16.0 - 16.9</Text>
                            <Text>17.0 - 18.4</Text>
                            <Text>18.5 - 24.9</Text>
                            <Text>25.0 - 29.9</Text>
                            <Text>30.0 - 34.9</Text>
                            <Text>35.0 - 39.9</Text>
                            <Text>> 40.0</Text>
                        </View>

                    </View>

                    <View style={{marginTop:8, height:60, backgroundColor:'#ffff', marginBottom:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{paddingLeft:20}}>
                            <Text style={{color:'#3EBC64', fontSize:20,}}>Normal Weight</Text>
                        </View>
                        <View style={{paddingRight:20, flexDirection:'row'}}>
                            <Text style={{fontWeight:'bold'}}>53.4</Text><Text style={{fontWeight:'bold'}}> - </Text><Text style={{fontWeight:'bold'}}>72.1</Text><Text style={{fontWeight:'bold'}}> Kg</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}


const styels = StyleSheet.create({

    textinput:{
        width:'70%',
        paddingHorizontal:16,
        fontSize:16,
        marginTop:10,
    },
});