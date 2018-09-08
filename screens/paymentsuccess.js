import React, { Component } from 'react'; 
import { Container, Header, Content, Card, CardItem, Text, Body,Input,Item,Left,Thumbnail,Right,List,ListItem } from 'native-base';
import {ScrollView,FlatList,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
export default class App extends Component { 
  render() {
   return ( 

    <Container style={{backgroundColor:'#fff'}}>
        <Header />
{/* payment successful details */}

<View>

      <View style={{flex:1,flexDirection:'column',alignItems:'center',paddingTop:40}}>

            <Icon name="md-checkmark-circle-outline" style={{color:'green',fontSize:40}} />
              
              <Text style={{ paddingVertical:20,fontSize:20,color:'#000',fontWeight:'bold'}}>Payment successful</Text>
              <Text style={{ fontSize:18,color:'green'}}>Rs. 5000</Text>

              <Text style={{ paddingVertical:20,color:'silver'}}>10:40, 24 aug 2018</Text>

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

        <Text style={{ paddingVertical:20,color:'silver',padding:30,marginBottom:'20%'}}>Now you have purchased 3 Months subscription of Diet Plan</Text>



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
        <Text style={styles.MyTex}>Next</Text>
        </TouchableOpacity>

      </View>
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