import React, { Component } from 'react'; 
import { Container, Header, Content, Card, CardItem, Text, Body,Input,Item,Left,Thumbnail,Right,List,ListItem,Icon } from 'native-base';
import {ScrollView,FlatList,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
export default class App extends Component { 
  render() {
   return ( 

    <Container style={{backgroundColor:'#fff',flex:1}}>
        <Header />
{/* payment successful details */}

      <View style={{flex:12,flexDirection:'column',alignItems:'center',paddingTop:40}}>

              
               <Icon name="md-close-circle" style={{color:'red',fontSize:40}} />
              
              <Text style={{ paddingVertical:20,fontSize:20,color:'#000',fontWeight:'bold'}}>Payment unsuccessful</Text>
              <Text style={{ fontSize:18,color:'red'}}>Rs. 5000</Text>

              <Text style={{ paddingVertical:20,color:'silver'}}>10:40, 24 aug 2018</Text>

        <Text style={{ paddingVertical:10,color:'silver'}}>
        Transaction could not be proceed
        </Text>
        <Text style={{color:'silver',marginBottom:'5%'}}>
        please contact your bank
        </Text>


               <TouchableOpacity
        style={{
          width:200,
          height:100,
          borderRadius:10,
          backgroundColor:'#F08080',
          justifyContent:'center',
          alignItems:'center'

        }}
        >
        <Text style={styles.MyTex}>Diet Plan</Text>
        </TouchableOpacity>

      </View>

    {/*  botttom button navigation*/}

         <View style={{ flex:2,justifyContent:'center',alignItems:'center'}}>

                  <TouchableOpacity
        style={{
          width:300,
          height:50,
          borderRadius:30,
          backgroundColor:'#F08080',
          justifyContent:'center',
          alignItems:'center'
        }}
        >
        <Text style={styles.MyTex}>Back to checkout</Text>
        </TouchableOpacity>

        </View>
        
      
            </Container>

         
    );
  }
}

const styles = StyleSheet.create({

   MyTex:{
    fontSize:18,
    color:'#fff',
    fontWeight:'800'
  },

clickMe:{

    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  }

});