import React, { Component } from 'react'; 
import { Container, Header, Content, Card, CardItem, Text, Body,Input,Item,Left,Thumbnail,Right,List,ListItem,Icon } from 'native-base';
import {ScrollView,FlatList,View,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native';

export default class App extends Component { 
  render() {
   return ( 

    <Container style={{backgroundColor:'#fff',flex:1}}>
        <Header />
{/* background image details */}

      <View style={{flex:6}}>


                    <Image source={require('.././images/1.png')} style={{flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'}} /> 

          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Thumbnail source={{ uri: 'http://www.stickpng.com/assets/images/580b585b2edbce24c47b254b.png' }} style={{marginTop:-40,marginBottom:10,justifyContent:'center',alignItems:'center',height:100,width:100,borderWidth:2,borderColor:'silver',borderRadius:100}}/>
          </View>


{/*
        <View  style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          
          <Thumbnail source={{ uri: 'https://cdn0.iconfinder.com/data/icons/Pinterest/128/Pinterest_Favicon.png' }}/>
        </View>         

    */}

    </View>


      {/* user details */}

      <View style={{flex:8}}>

 {/* user name */}
        <View style={{alignItems:'center',flex:1}}>

              <Text style={{fontSize:22,fontWeight:'bold'}}>Rishabh Shukla</Text>

               <View style={{flex:2,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>

               <Icon active name="md-mail" style={{color:'#d34836'}} />
              <Text style={{padding:5,color:'grey'}}>Rishabhshukala68@gmail.com</Text>
               <Icon active name="md-call" style={{color:'#34AF23'}}/>
              <Text style={{padding:5,color:'grey'}}>9867452148</Text>

        </View>

        </View>

 {/* user contact details */}
       
         {/* user body details */}

        <View style={{flex:3}}>


        <ListItem icon>
            <Body>
              <Text style={{color:'grey'}}>Age</Text>
            </Body>
            <Right>
              <Text >22 years</Text>
            </Right>
          </ListItem>

            <ListItem icon>
            <Body>
              <Text style={{color:'grey'}}>Weight</Text>
            </Body>
            <Right>
              <Text>52 kgs</Text>
            </Right>
          </ListItem>

            <ListItem icon>
            <Body>
              <Text style={{color:'grey'}}>Height</Text>
            </Body>
            <Right>
              <Text>5 feet 7 inch</Text>
            </Right>
          </ListItem>

            <ListItem icon>
            <Body>
              <Text style={{color:'grey'}}>Food Preferences</Text>
            </Body>
            <Right>
              <Text>Veg</Text>
            </Right>
          </ListItem>

            <ListItem icon>
            <Body>
              <Text style={{color:'grey'}}>Medical History</Text>
            </Body>
            <Right>
              <Text>Thyroid</Text>
            </Right>
          </ListItem>
        {/*

            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                  <Text>Age</Text>
                  <View style={{justifyContent:'center'}}>
                  <Text>:</Text>
                  </View>
                  <Text>21 years</Text>
              </View>

              <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                  <Text>Weight</Text>
                   <View style={{justifyContent:'center'}}>
                  <Text>:</Text>
                  </View>
                  <Text>65 kg</Text>
              </View>

              <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                  <Text>Height</Text>
                   <View style={{justifyContent:'center'}}>
                  <Text>:</Text>
                  </View>
                  <Text>5 feet 7 inch</Text>
              </View>

              <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                  <Text>Food Preferences</Text>
                  <Text>:</Text>
                  <Text>veg</Text>
              </View>

               <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                  <Text>Medical History</Text>
                  <Text>:</Text>
                  <Text>Thyroid</Text>
              </View>

            */}

        </View>
                  

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
        <Text style={styles.MyTex}>Log Out</Text>
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