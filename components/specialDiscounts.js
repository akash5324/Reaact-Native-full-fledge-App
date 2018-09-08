require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, ImageBackground,Dimensions, ScrollView, StatusBar,  BackHandler } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right} from 'native-base';


export default class specialDiscounts extends React.Component{

    render(){
        return(
           
                <ScrollView>
                
                <View style={styles.horizontalView}>
                    <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                        <View style={{width: Dimensions.get('screen').width}}>
                            <Image source={require('../images/offers/temp.png')} style={{width:'100%', height:'100%'}}/>
                        </View>
                        <View style={{width:Dimensions.get('screen').width}}>
                            <Image source={require('../images/offers/temp.png')} style={{width:'100%', height:'100%'}}/>
                        </View>
                        <View style={{width:Dimensions.get('screen').width}}>
                            <Image source={require('../images/offers/temp.png')} style={{width:'100%', height:'100%'}}/>
                        </View>
                    </ScrollView>
                </View>
                <View style={{height:160}}>
                    <Image source={require('../images/offers/offer.jpg')} style={{width:'100%', height:'100%'}}/>
                </View>

                <View style={{height:120,  flexDirection:'row', marginTop:8, marginBottom:8, justifyContent:'space-between'}}>
                    <View style={{flex:1,}}>
                        <Image source={require('../images/offers/offer.jpg')} style={{width:'98%', height:'100%'}}/>
                    </View>
                    <View style={{flex:1}}>
                        <Image source={require('../images/offers/offer.jpg')} style={{width:'100    %', height:'100%'}}/>
                    </View>
                </View>

                <View style={{height:200}}>
                    <Image source={require('../images/offers/Early-Bird.png')} style={{width:'100%', height:'100%'}}/>
                </View>
            
            
                </ScrollView>
        );
    }
}


const styles = StyleSheet.create({

    horizontalView:{
        height:250
    },

    horizontalScrollImage:{
        height:'100%',
        width:'100%'
    }


});