import React, { Component } from 'react';

import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ImageBackground, ScrollView, StatusBar } from 'react-native';

import { DrawerItems, createDrawerNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation';


export default MyDrawerNavigator = createDrawerNavigator({

  render(){
    return(
      <View style={{flex:1, backgroundColor:'#ecefef'}}>
      <View style={{height: 225, backgroundColor:'#ffff'}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                marginTop: 15,
                marginBottom: 25,
                marginRight: -110,
                marginLeft:20
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  console.log('Image tapped');
                }}>
                <ImageBackground
                  source={{
                    uri:
                      'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
                  }}
                  style={{ width: '80%', height: 150, }}
                  imageStyle={{ borderRadius: 5 }}
                  >
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'left',
                      marginLeft: 10,
                      marginTop: 20,
                      fontSize: 22,
                    }}>
                    Balance
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'left',
                      marginLeft: 10,
                      marginTop: 7,
                      fontSize: 15,
                    }}>
                    Rs.1299/m
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'left',
                      marginLeft: 10,
                      marginBottom: 20,
                      marginTop: 10,
                      marginRight: 15,
                    }}>
                    <Text style={{ fontWeight: 'bold' }}>
                      2 personal Coaches,
                    </Text>{' '}
                    4 Consultation Calls a month, Diet Plan, Workout Plan
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 15,
                marginBottom: 25,
                marginRight: -110
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  console.log('Image tapped');
                }}>
                <ImageBackground
                  source={{
                    uri:
                      'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
                  }}
                  style={{ width: '80%', height: 150 }}
                  imageStyle={{ borderRadius: 5 }}
                  >
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'left',
                      marginLeft: 10,
                      marginTop: 20,
                      fontSize: 22,
                    }}>
                    Balance
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'left',
                      marginLeft: 10,
                      marginTop: 7,
                      fontSize: 15,
                    }}>
                    Rs.1299/m
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'left',
                      marginLeft: 10,
                      marginBottom: 20,
                      marginTop: 10,
                      marginRight: 15,
                    }}>
                    <Text style={{ fontWeight: 'bold' }}>
                      2 personal Coaches,
                    </Text>{' '}
                    4 Consultation Calls a month, Diet Plan, Workout Plan
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 15,
                marginBottom: 25,
                marginRight: -150
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  console.log('Image tapped');
                }}
                >
                <ImageBackground
                  source={{
                    uri:
                      'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
                  }}
                  style={{ width:'80%', height: 150, }}
                  imageStyle={{ borderRadius: 5,  }}
                  >
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'left',
                      marginLeft: 10,
                      marginTop: 20,
                      fontSize: 22,
                    }}>
                    Balance
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'left',
                      marginLeft: 10,
                      marginTop: 7,
                      fontSize: 15,
                    }}>
                    Rs.1299/m
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'left',
                      marginLeft: 10,
                      marginBottom: 20,
                      marginTop: 10,
                      marginRight: 15,
                    }}>
                    <Text style={{ fontWeight: 'bold' }}>
                      2 personal Coaches,
                    </Text>{' '}
                    4 Consultation Calls a month, Diet Plan, Workout Plan
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            {/*    <View>
              <Image source={require('./screens/pic2.jpeg')}/>
              </View>

              <View>
              <Image source={require('./screens/pic3.jpeg')}/>
              </View>*/}
          </ScrollView>
      </View>


      <View style={{flex:1, flexDirection:'column', marginTop: 8, backgroundColor:'#ffff'}}>


      <View style={{flex:1}}>

        <View style={{ flexDirection:'row'}}>
          <View style={{ backgroundColor:'black'}}>
            <ImageBackground
              source={{
                uri:
                  'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
              }}
              style={{ width: 180, height: 140, }}
            >
            <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 1</Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground
              source={{
                uri:
                'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
              }}
              style={{ width: 180, height: 140, }}
          >
          <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 2</Text>
            </ImageBackground>

          </View>
        </View>
        </View>


        <View style={{flex:1}}>

          <View style={{ flexDirection:'row'}}>
            <View style={{ backgroundColor:'black'}}>
              <ImageBackground
                source={{
                  uri:
                    'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
                }}
                style={{ width: 180, height: 140, }}
              >
              <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 3</Text>
              </ImageBackground>
            </View>
            <View>
              <ImageBackground
                source={{
                  uri:
                  'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
                }}
                style={{ width: 180, height: 140, }}
            >
            <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 4</Text>
              </ImageBackground>

            </View>
          </View>
          </View>


          <View style={{flex:1}}>

            <View style={{ flexDirection:'row'}}>
              <View style={{ backgroundColor:'black'}}>
                <ImageBackground
                  source={{
                    uri:
                      'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
                  }}
                  style={{ width: 180, height: 140, }}
                >
                <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 5</Text>
                </ImageBackground>
              </View>
              <View>
                <ImageBackground
                  source={{
                    uri:
                    'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
                  }}
                  style={{ width: 180, height: 140, }}
              >
              <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 6</Text>
                </ImageBackground>

              </View>
            </View>

            </View>




      </View>



</View>
    );
  }

});
