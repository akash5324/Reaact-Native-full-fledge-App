require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, ImageBackground,Dimensions, ScrollView, StatusBar,  BackHandler } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right} from 'native-base';

export default class diet extends React.Component{

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
        return(

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{height:250}}>
                    <Image source={require('../images/diet/dosa.jpeg')} style={{width:'100%', height:'100%'}}/>
                </View>

                <View style={{height:200, width:'100%', backgroundColor:'#ffff'}}>
                    <View style={{flexDirection:'row', paddingTop: 10, justifyContent: 'space-between'}}>
                        <Text style={{fontSize:18, paddingLeft:20, color:'black', fontWeight:'400'}}>
                            Special Discounts
                        </Text>

                        <TouchableOpacity style={{paddingRight:20}}>
                            <Text style={{
                             color: '#F35B5B',
                            }}>
                            View All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{flexDirection:'row' }}>
                            <TouchableOpacity>
                                <View style={{marginTop:10, marginRight:10, marginLeft:20, marginBottom:10, width:140, height:50, }}>
                                    <View style={{backgroundColor:'#F35B5B', borderTopLeftRadius:5, borderTopRightRadius:5}}>
                                        <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:5, paddingTop:10, paddingBottom:10, color:'#ffff' }}>2 Diet Plan</Text>
                                    </View>
                                    <View style={{ borderTopLeftRadius:5, borderTopRightRadius:5, paddingRight:5, paddingLeft:5}}>
                                        <Text>Lorem Ipsum is has been the standard demo text in the industry since 1500, when an </Text>                     
                                    </View>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                <View style={{marginTop:10, marginRight:10, marginBottom:10, width:140, height:50}}>
                                    <View style={{backgroundColor:'#F35B5B', borderTopLeftRadius:5, borderTopRightRadius:5}}>
                                        <Text style={{fontSize:20,fontWeight:'bold', paddingLeft:5, paddingTop:10, paddingBottom:10, color:'#ffff'}}>2 Diet Plan</Text>
                                    </View>
                                    <View style={{ borderTopLeftRadius:5, borderTopRightRadius:5, paddingRight:5, paddingLeft:5}}>
                                        <Text><Text>Lorem Ipsum is has been the standard demo text in the industry since 1500, when an </Text> </Text>                    
                                    </View>                    
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{marginTop:10, marginRight:10, marginRight:20, marginBottom:10, width:140, height:50}}>
                                    <View style={{backgroundColor:'#F35B5B', borderTopLeftRadius:5, borderTopRightRadius:5}}>
                                        <Text style={{fontSize:20,fontWeight:'bold', paddingLeft:5, paddingTop:10, paddingBottom:10, color:'#ffff'}}>2 Diet Plan</Text>
                                    </View>
                                    <View style={{ borderTopLeftRadius:5, borderTopRightRadius:5, paddingRight:5, paddingLeft:5}}>
                                        <Text><Text>Lorem Ipsum is has been the standard demo text in the industry since 1500, when an </Text> </Text>
                                    </View>                  
                                </View>    
                            </TouchableOpacity>

                        </View>
                    </ScrollView> 
                </View> 
                
                <View style={{height:250, width:'100%', backgroundColor:'#ffff', marginTop:8}}>
                    <View style={{marginTop:20}}>
                        <Text style={{fontSize:18, paddingLeft:20, color:'black', fontWeight:'400'}}>Why Diet 1</Text>
                    </View>
                    <View style={{marginTop:15}}>
                        <Text style={{ paddingLeft:20,paddingRight:20, paddingBottom:20 , fontWeight:'400'}}>Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von "Letraset", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie "Aldus PageMaker</Text>
                    </View>
                </View>

                <View>
                </View>


            </ScrollView>

        );
    }
}