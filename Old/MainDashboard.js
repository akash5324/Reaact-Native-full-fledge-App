import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, ImageBackground, ScrollView, StatusBar } from 'react-native';

import { DrawerItems, createDrawerNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation';

class BellIcon extends Component {

  toggleDrawer=()=>{

    console.log(this.props.navigationProps);

    this.props.navigationProps.toggleDrawer();

  }

  render() {

    return (

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity onPress={
          ()=> {
            console.log("no Notification");
          }
        } >

          <Image
            source={{uri : 'https://static.thenounproject.com/png/3013-200.png'}}
            style={{ width: 30, height: 30, marginRight: 10}}
          />

        </TouchableOpacity>

      </View>

    );


  }
}

class HamburgerIcon extends Component {

  toggleDrawer=()=>{

    console.log(this.props.navigationProps);

    this.props.navigationProps.toggleDrawer();

  }

  render() {

    return (

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >

          <Image
            source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
            style={{ width: 25, height: 25, marginLeft: 10,}}
          />

        </TouchableOpacity>

      </View>

    );


  }
}

class MainActivity extends Component {

  // constructor(props) {
  //
  //   super(props);
  //
  //   YellowBox.ignoreWarnings([
  //    'Warning: componentWillMount is deprecated',
  //    'Warning: componentWillReceiveProps is deprecated',
  //  ]);
  //
  // }

  /*Completer code for Dashboard screen*/
   render()

   {
      return(

        <ScrollView>
          <StatusBar hidden={false}/>
          <View style={{ flex: 1, backgroundColor: '#ecefef' }}>

            <View style={{ flex: 1, backgroundColor: '#fdfdfd',marginTop:8 }}>

              <Text
                style={{
                top: 10,
                left: 20,
                color: '#000000',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
                Plans
              </Text>

              <Text
                style={{
                top:-10,
                left:'80%',
                color: '#ff89a3',
              }}>
                View All
              </Text>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View
                      style={{
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 15,
                        marginBottom: 25,
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
                          style={{ width: 280, height: 150, }}
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
                        borderRadius: 100,
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 15,
                        marginBottom: 25,
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
                          style={{ width: 280, height: 150 }}
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
                        borderRadius: 100,
                        marginLeft: 10,
                        marginRight: 20,
                        marginTop: 15,
                        marginBottom: 25,
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
                          style={{ width: 280, height: 150, }}
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

            <View style={{flex:1, height:200, width:500, backgroundColor:'#ff89a3', flexDirection: 'row', marginTop:8}}>
              <View style={{ justifyContent:'center', alignItems: 'center'}}>
                <Image source={{uri:'https://cdn3.iconfinder.com/data/icons/sports-vector-line-1/128/22-512.png'}} style={{height:70, width:70, alignSelf:'center', marginLeft:'10%', marginRight:'10%'}}/>
              </View>
              <View style={{flex: 1}}>
              <Text style={{color:'#ffff', fontWeight:'bold', fontSize:25, left:'7%', marginTop:'10%'}}>Track Weight</Text>
                <Text style={{color:'#ffff', left:'17%'}}>Know your weight</Text>

                  <TouchableOpacity
                    style={{width:150,
                    marginTop:20,
                    paddingTop:10,
                    paddingBottom:10,
                    backgroundColor:'#f28787',
                    borderRadius:27,
                    borderWidth: 1,
                    borderColor: '#fff',
                    left:'7%'
                  }}>
                    <Text style={{color:'#ffff', fontWeight:'bold', textAlign:'center'}}>Check Now</Text>
                  </TouchableOpacity>
                </View>
              </View>


             <View style={{
                flex:1,
                flexDirection:'column',
                height:300,
                width: '100%',
                marginTop:8,
                backgroundColor:'#fdfdfd',
                justifyContent: 'center',
                alignItems: 'center',
              }}>

                <View>
                  <Text style={{fontSize:20, marginTop:10}}>Testimonials</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={{
                     flex:1,
                     flexDirection:'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                 }}>
                    <View>
                      <Image
                      source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Natalie_Portman_Cannes_2015_5_%28cropped%29.jpg/220px-Natalie_Portman_Cannes_2015_5_%28cropped%29.jpg'}}
                      style={{height:85, width:85, borderRadius:50, marginTop:-20}}
                      />
                    </View>
                    <View style={{
                      marginTop:10
                    }}>
                      <Text>Natalie</Text>
                    </View>
                    <View>
                      <Text style={{color:'grey'}}>0kg lost in 0 months</Text>
                    </View>
                    <View style={{width:'70%'}}>
                      <Text style={{color:'grey', marginTop:20, textAlign:'center'}}>"The biggest advantage of HalthifyMe it helped meet my goals"</Text>
                    </View>
                  </View>

                  <View style={{
                     flex:1,
                     flexDirection:'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                 }}>
                    <View>
                      <Image
                      source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Natalie_Portman_Cannes_2015_5_%28cropped%29.jpg/220px-Natalie_Portman_Cannes_2015_5_%28cropped%29.jpg'}}
                      style={{height:85, width:85, borderRadius:50, marginTop:-20}}
                      />
                    </View>
                    <View style={{
                      marginTop:10
                    }}>
                      <Text>Natalie Portman</Text>
                    </View>
                    <View>
                      <Text style={{color:'grey'}}>0kg lost in 0 months</Text>
                    </View>
                    <View style={{width:'70%'}}>
                      <Text style={{color:'grey', marginTop:20, textAlign:'center'}}>"I don't need to lose weight. I'm perfect plus Sehej's crush"</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>


              <View style={{flex:1, height:200, width:500, backgroundColor:'#86578F', flexDirection: 'row', marginTop:8}}>
                <View style={{ justifyContent:'center', alignItems: 'center'}}>

                <Text style={{color:'#ffff', fontWeight:'bold', fontSize:25, left:'7%', marginTop:'10%'}}>Track Weight</Text>
                <Text style={{color:'#ffff', left:'17%'}}>Know your weight</Text>

                <TouchableOpacity
                  style={{width:150,
                  marginTop:20,
                  paddingTop:10,
                  paddingBottom:10,
                  backgroundColor:'#da87f1',
                  borderRadius:27,
                  borderWidth: 1,
                  borderColor: '#fff',
                  left:'7%'
                }}>
                  <Text style={{color:'#ffff', fontWeight:'bold', textAlign:'center', justifyContent:'center'}}>Check Now</Text>
                </TouchableOpacity>

              </View>
              <View style={{flex: 1}}>
                <Image source={{uri:'https://cdn3.iconfinder.com/data/icons/sports-vector-line-1/128/22-512.png'}} style={{height:70, width:70, alignSelf:'center', marginTop:'21%', marginRight:'30%'}}/>
              </View>

            </View>

          </View>
        </ScrollView>
      );
   }
}

class SecondActivity extends Component {

  constructor(props) {

    super(props);

    YellowBox.ignoreWarnings([
     'Warning: componentWillMount is deprecated',
     'Warning: componentWillReceiveProps is deprecated',
   ]);

  }

     render()
     {
        return(

           <View style = { styles.MainContainer }>

              <Text style={{fontSize: 23}}> This is Activity - 2 </Text>

           </View>
        );
     }
  }

class ThirdActivity extends Component {

    constructor(props) {

      super(props);

      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);

    }

       render()
       {
          return(

             <View style = { styles.MainContainer }>

                <Text style={{fontSize: 23}}> This is Activity - 3 </Text>

             </View>
          );
       }
    }

class FourthActivity extends Component {

        constructor(props) {

          super(props);

          YellowBox.ignoreWarnings([
           'Warning: componentWillMount is deprecated',
           'Warning: componentWillReceiveProps is deprecated',
         ]);

        }

           render()
           {
              return(

                 <View style = { styles.MainContainer }>

                    <Text style={{fontSize: 23}}> This is Activity - 3 </Text>

                 </View>
              );
           }
        }

class FifthActivity extends Component {

            constructor(props) {

              super(props);

              YellowBox.ignoreWarnings([
               'Warning: componentWillMount is deprecated',
               'Warning: componentWillReceiveProps is deprecated',
             ]);

            }

               render()
               {
                  return(

                     <View style = { styles.MainContainer }>

                        <Text style={{fontSize: 23}}> This is Activity - 3 </Text>

                     </View>
                  );
               }
            }

class SixthActivity extends Component {

                constructor(props) {

                  super(props);

                  YellowBox.ignoreWarnings([
                   'Warning: componentWillMount is deprecated',
                   'Warning: componentWillReceiveProps is deprecated',
                 ]);

                }

                   render()
                   {
                      return(

                         <View style = { styles.MainContainer }>

                            <Text style={{fontSize: 23}}> This is Activity - 3 </Text>

                         </View>
    );
   }
}

class SeventhActivity extends Component {

    constructor(props) {

      super(props);

      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);

    }

       render()
       {
          return(

             <View style = { styles.MainContainer }>

                <Text style={{fontSize: 23}}> This is Activity - 3 </Text>

             </View>
          );
       }
    }

class EightActivity extends Component {

        constructor(props) {

          super(props);

          YellowBox.ignoreWarnings([
           'Warning: componentWillMount is deprecated',
           'Warning: componentWillReceiveProps is deprecated',
         ]);

        }

           render()
           {
              return(

                 <View style = { styles.MainContainer }>

                    <Text style={{fontSize: 23}}> This is Activity - 3 </Text>

                 </View>
              );
           }
        }


const FirstActivity_StackNavigator = createStackNavigator({
      First: {
        screen: MainActivity,
        navigationOptions: ({ navigation }) => ({
          title: 'Dashboard',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerRight: <BellIcon navigationProps={navigation}/>,
          headerStyle: {
            backgroundColor: '#FBFBFB',
          },
          headerTintColor: '#000000',
        })
      },
    });

const SecondActivity_StackNavigator = createStackNavigator({
      Second: {
        screen: SecondActivity,
        navigationOptions: ({ navigation }) => ({
          title: 'Plans',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerRight: <BellIcon navigationProps={navigation}/>,
          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
    });

const ThirdActivity_StackNavigator = createStackNavigator({
      Third: {
        screen: ThirdActivity,
        navigationOptions: ({ navigation }) => ({
          title: 'Track Weight',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerRight: <BellIcon navigationProps={navigation}/>,
          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
    });

const FourthActivity_StackNavigator = createStackNavigator({
          Fourth: {
            screen: FourthActivity,
            navigationOptions: ({ navigation }) => ({
              title: 'BMI Calculator',
              headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
              headerRight: <BellIcon navigationProps={navigation}/>,
              headerStyle: {
                backgroundColor: '#FF9800'
              },
              headerTintColor: '#fff',
            })
          },
});

const FifthActivity_StackNavigator = createStackNavigator({
      Fifth: {
        screen: FifthActivity,
        navigationOptions: ({ navigation }) => ({
          title: 'Profile',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerRight: <BellIcon navigationProps={navigation}/>,
          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
});

const SixthActivity_StackNavigator = createStackNavigator({
      Sixth: {
        screen: SixthActivity,
        navigationOptions: ({ navigation }) => ({
          title: 'Refer & Earn',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerRight: <BellIcon navigationProps={navigation}/>,
          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
});

const SeventhActivity_StackNavigator = createStackNavigator({
      Seventh: {
        screen: SeventhActivity,
        navigationOptions: ({ navigation }) => ({
          title: 'Rate Us',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerRight: <BellIcon navigationProps={navigation}/>,
          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
    });

const EightActivity_StackNavigator = createStackNavigator({
          Eight: {
            screen: EightActivity,
            navigationOptions: ({ navigation }) => ({
              title: 'Share us',
              headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
              headerRight: <BellIcon navigationProps={navigation}/>,
              headerStyle: {
                backgroundColor: '#FF9800'
              },
              headerTintColor: '#fff',
            })
          },
});

const MainDashboard = createDrawerNavigator({

  Dashboard: {
    screen: FirstActivity_StackNavigator
  },

  Plans: {
    screen: SecondActivity_StackNavigator
  },

  'Track Weight': {
    screen: ThirdActivity_StackNavigator
  },

  'BMI Calculator': {
    screen: FourthActivity_StackNavigator
  },

  Profile: {
    screen: FirstActivity_StackNavigator
  },

  'Refer and Earn': {
    screen: FirstActivity_StackNavigator
  },

  'Rate Us': {
    screen: FirstActivity_StackNavigator
  },

  'Share Us': {
    screen: FirstActivity_StackNavigator

  }
});



const styles = StyleSheet.create(

  {
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: ( Platform.OS === 'android' ) ? 20 : 0
    },

    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex:1,
      margin: 10,
      position: 'absolute',
      width: '100%',
      height: '100%',

    },

    SplashScreen_ChildView:
    {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00BCD4',
      flex:1,
      margin: 20,
    },

    TouchableOpacity_Style:{

      width:30,
      height: 20,
      top:9,
      right:10,
      position: 'absolute'

    },
    SubmitButtonStyle: {
      width:300,
      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      marginLeft:30,
      marginRight:30,
      backgroundColor:'#fff',
      borderRadius:27,
      borderWidth: 1,
      borderColor: '#fff'
    },
    TextStyle:{
      color:'#fff',
      textAlign:'center',
    },
    MainContainer :{
     flex:1,
     paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
     alignItems: 'center',
     justifyContent: 'center',

     }

  });

export default MainDashboard;
