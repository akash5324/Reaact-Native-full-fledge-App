require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image,Alert, TouchableOpacity,TextInput, ImageBackground, ScrollView, StatusBar,  BackHandler } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right, Footer, Picker} from 'native-base';

export default class recipies extends React.Component{


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

    render(){
        const {navigate}=this.props.navigation
        return(
            
            <View style={{flex:1, backgroundColor:'#ecefef'}}>
                <ScrollView>
                <StatusBar hidden/>
                   <TouchableOpacity onPress={()=>navigate('recipies clicked')}>
                    <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>
                    </TouchableOpacity>

                     <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>

                     <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>

                     <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>

                     <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>

                     <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>

                     <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>

                     <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>

                     <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>

                     <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>

                     <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>

                     <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>

                     <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>
                    
                    <View style={{height:100, backgroundColor:'#ffff', marginTop:8, flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <Image source={require('../images/recipies/recipies.png')} style={{height:'100%', width:'100%'}}/>
                        </View>
                        <View style={{flex:3, paddingLeft:8, paddingRight:5}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Imran Khan scheduled to take oath on August 18 of the President House.</Text>
                            <Text style={{fontSize:12}}>Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>



        );
    }
}