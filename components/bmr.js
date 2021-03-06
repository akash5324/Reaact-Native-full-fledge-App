require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image,Alert, TouchableOpacity,TextInput, ImageBackground, ScrollView, StatusBar,  BackHandler } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right, Footer, Picker} from 'native-base';

export default class whr extends React.Component{
    
    static navigationOptions={
        // header:null
    }

    state = {user: ''}
    updateUser = (user) => {
       this.setState({ user: user })
    }

    render(){
        return(
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, backgroundColor:'#ecefef'}}>                   
                    <View style={{marginTop:8, backgroundColor:'#ffff',height:700}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{ width:'25%', height:100, alignItems:'center', marginTop:15}}>
                                <Text style={{fontSize:20,}}>Gender</Text>
                                <View style={{ flexDirection:'row', marginTop:5}}>
                                    <Image source={require('../images/Calculators/b.png')} style={{width:30, height:50}}/>
                                    <Image source={require('../images/Calculators/g.png')} style={{width:30, height:50}}/>
                                </View>
                            </View>

                            <View style={{ width:'25%', height:100, alignItems:'center', marginTop:15}}>
                                <Text style={{fontSize:20,}}>Age</Text>
                                <TextInput keyboardType={'numeric'}/>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                            <View style={{flexDirection:'row',marginLeft:20}}>
                                <View style={{height:100, alignItems:'center',marginTop:18}}>
                                    <Text style={{fontSize:20,}}>Height</Text>
                                    <TextInput style={{width:70, textAlign:'center', fontSize:20}} keyboardType='numeric'/>
                                </View>
                                <View style={{height:100, alignItems:'center',}}>
                                    <Picker  selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{width:100}}>
                                        <Picker.Item label = "Cm" value = "cm" />
                                        <Picker.Item label = "Inch" value = "Inch" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={{flexDirection:'row', marginRight:10}}>
                                <View style={{ height:100, alignItems:'center', marginTop:18}}>
                                    <Text style={{fontSize:20,}}>Neck</Text>
                                    <TextInput style={{width:70, textAlign:'center', fontSize:20}} keyboardType='numeric'/>
                                </View>
                                <View style={{ height:100, alignItems:'center',}}>
                                    <Picker  selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{width:100}}>
                                        <Picker.Item label = "Cm" value = "cm" />
                                        <Picker.Item label = "Inch" value = "Inch" />
                                    </Picker>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                            <View style={{flexDirection:'row',marginLeft:20}}>
                                <View style={{height:100, alignItems:'center',marginTop:18}}>
                                    <Text style={{fontSize:20,}}>Weight</Text>
                                    <TextInput style={{width:70, textAlign:'center', fontSize:20}} keyboardType='numeric'/>
                                </View>
                                <View style={{height:100, alignItems:'center',}}>
                                    <Picker  selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{width:100}}>
                                        <Picker.Item label = "Kg" value = "Kg" />
                                        <Picker.Item label = "Lb" value = "Lb" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={{flexDirection:'row', marginRight:10}}>
                                <View style={{ height:100, alignItems:'center', marginTop:18}}>
                                    <Text style={{fontSize:20,}}>Hip</Text>
                                    <TextInput style={{width:70, textAlign:'center', fontSize:20}} keyboardType='numeric'/>
                                </View>
                                <View style={{ height:100, alignItems:'center',}}>
                                    <Picker  selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{width:100}}>
                                        <Picker.Item label = "Cm" value = "cm" />
                                        <Picker.Item label = "Inch" value = "Inch" />
                                    </Picker>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                            <View style={{flexDirection:'row',marginLeft:20}}>
                                <View style={{height:100, alignItems:'center',marginTop:18}}>
                                    <Text style={{fontSize:20,}}>Weight</Text>
                                    <TextInput style={{width:70, textAlign:'center', fontSize:20}} keyboardType='numeric'/>
                                </View>
                                <View style={{height:100, alignItems:'center',}}>
                                    <Picker  selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{width:100}}>
                                        <Picker.Item label = "Kg" value = "Kg" />
                                        <Picker.Item label = "Lb" value = "Lb" />
                                    </Picker>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <Image source={require('../images/bmi.png')} style={{width:'100%', height:'100%'}}/>
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