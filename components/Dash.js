require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, StatusBar,  BackHandler } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right} from 'native-base';
import { createDrawerNavigator, createStackNavigator, DrawerItems,createBottomTabNavigator } from 'react-navigation';




export default class Dash extends React.Component{


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



  // static navigationOptions = {
  //
  //   drawerIcon:(
  //     <Image source={require('../images/flashImage.png')} style={{width:25, height:25}} />
  //   )
  // }
  render(){

    const { navigate } = this.props.navigation;
 

    return(

      <Container>

        <Header style={{backgroundColor:'white'}}>
          
          <Left style={{flex:1}}>
            <Icon name='ios-menu' onPress={()=>
              this.props.navigation.openDrawer()} />
          </Left>

          <Body style={{flex:1}} >
          <Text style={{fontSize:20, color:'black'}}>
          Dashboard
          </Text>
          </Body>

          <Right style={{flex:1}}>
            <Icon name='ios-notifications' onPress={()=>
              this.props.navigation.navigate('DrawerOpen')} />
          </Right>

        </Header>

        <Content >
          <ScrollView>
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
                color: '#F35B5B',
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
                        onPress={() =>navigate('Plans and Packages')
                        }>
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
                        onPress={() =>navigate('Plans and Packages')
                        }>
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
                        onPress={() =>navigate('Plans and Packages')
                        }
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

                      {/* Track Weight */}

            <View style={{flex:1, height:200, width:'100%', backgroundColor:'#FF456D', flexDirection: 'row', marginTop:8}}>
              <View style={{ justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('../images/Dashboard/weight.png')} style={{height:100, width:100, alignSelf:'center', marginLeft:'10%', marginRight:'10%'}}/>
              </View>
              <View style={{width:'100%'}}>
              <Text style={{color:'#ffff', fontWeight:'bold', fontSize:25, left:'7%', marginTop:'10%'}}>Track Weight</Text>
                <Text style={{color:'#ffff', left:'17%'}}>Know your weight</Text>

                  <TouchableOpacity
                  onPress={() =>navigate('Track Weight')}
                    style={{width:150,
                    marginTop:20,
                    paddingTop:10,
                    paddingBottom:10,
                    backgroundColor:'#FF456D',
                    borderRadius:27,
                    borderWidth: 1,
                    borderColor: '#fff',
                    left:'7%'
                  }}>
                    <Text style={{color:'#ffff', fontWeight:'bold', textAlign:'center'}}>Check Now</Text>
                  </TouchableOpacity>
                </View>
              </View>

                


              {/* //BMI Calculator  */}

              <View style={{flex:1, height:200, width:'100%', backgroundColor:'#85578E', flexDirection: 'row', marginTop:8}}>
              <View style={{ justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('../images/Dashboard/bmi.png')} style={{height:70, width:70, alignSelf:'center', marginLeft:'10%', marginRight:'10%'}}/>
              </View>
              <View style={{width:'100%'}}>
              <Text style={{color:'#ffff', fontWeight:'bold', fontSize:25, left:'7%', marginTop:'10%'}}>BMI Calculator</Text>
                <Text style={{color:'#ffff', left:'17%'}}>Know your body mass index</Text>

                  <TouchableOpacity
                  onPress={()=>navigate('BMI Calculator')}
                    style={{width:150,
                    marginTop:20,
                    paddingTop:10,
                    paddingBottom:10,
                    backgroundColor:'#85578E',
                    borderRadius:27,
                    borderWidth: 1,
                    borderColor: '#fff',
                    left:'7%'
                  }}
                  >
                    <Text style={{color:'#ffff', fontWeight:'bold', textAlign:'center'}}>Check Now</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* //     {/* Special Discount */}

              <View style={{height:200, width:'100%', backgroundColor:'#ffff', marginTop:8}}>
                <View style={{flexDirection:'row', paddingTop: 10, justifyContent: 'space-between'}}>
                  <Text style={{fontSize:20, paddingLeft:20, color:'black', fontWeight:'bold'}}>
                    Special Discounts
                  </Text>

                  <TouchableOpacity onPress={()=>navigate('diet')} style={{paddingRight:20}}>
                    <Text style={{
                    color: '#F35B5B',
                    }}>
                      View All
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row', justifyContent: 'space-between' }}>

                  <View style={{marginTop:10, marginLeft:20, marginBottom:10, width:100, height:50, }}>
                    <View style={{}}>
                      <Image source={require('../images/pizza.jpg')} style={{width:100, height:50}}/>
                    </View>
                    <View>
                      <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                        $10,999
                      </Text>
                      <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>
                        $8,999
                      </Text>
                      <Text style={{color:'red'}}>
                        30% off
                      </Text>
                      <Text style={{fontSize:15,}}> 
                        Lean Diet Plan
                      </Text>
                     
                    </View>
                  </View>

                  <View style={{marginTop:10, marginBottom:10, width:100, height:50}}>
                    <View style={{}}>
                      <Image source={require('../images/pizza.jpg')} style={{width:100, height:50}}/>
                    </View>
                    <View>
                      <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                        $10,999
                      </Text>
                      <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>
                        $8,999
                      </Text>
                      <Text style={{color:'red'}}>
                        30% off
                      </Text>
                      <Text style={{fontSize:15,}}>
                        Lean Diet Plan
                      </Text>
                     
                    </View>                    
                  </View>

                  <View style={{marginTop:10, marginRight:20, marginBottom:10, width:100, height:50}}>
                  <View style={{}}>
                      <Image source={require('../images/pizza.jpg')} style={{width:100, height:50}}/>
                    </View>
                    <View>
                      <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                        $10,999
                      </Text>
                      <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>
                        $8,999
                      </Text>
                      <Text style={{color:'red'}}>
                        30% off
                      </Text>
                      <Text style={{fontSize:15,}}>
                        Lean Diet Plan
                      </Text>
                     
                    </View>                  
                  </View>    
                  
                </View>

              </View> 









                    {/* //Testimonials */}
               
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
                      <Text>Natalie</Text>
                    </View>
                    <View>
                      <Text style={{color:'grey'}}>0kg lost in 0 months</Text>
                    </View>
                    <View style={{width:'70%'}}>
                      <Text style={{color:'grey', marginTop:20, textAlign:'center'}}>"The biggest advantage of HalthifyMe it helped meet my goals"</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
                    




            {/* Refer & Earn */}
            <TouchableOpacity onPress={()=>navigate('Refer and Earn')}>
            <View style={{marginTop: 8, marginBottom:8, flexDirection:'row', backgroundColor:'white'}}>
              <View>
                <Image source={require('../images/Dashboard/refer.png')} style={{width: 100, height:100}}/>
              </View>
              
              <View style={{width:'60%', marginTop:10, marginLeft:10}}>
                  <Text style={{fontSize:25, fontWeight:'bold', color:'black'}}>
                    Refer & Earn
                  </Text>
                  <Text>
                    Invite your friends and family and win free packages
                  </Text>
              </View>
            

              {/* <View style={{justifyContent:'flex-end'}}>
              <TouchableOpacity
                    style={{width:150,
                   
                    backgroundColor:'#F35B5B',
                    borderRadius:27,
                    borderWidth: 1,
                    borderColor: '#fff',
                    left:'7%'
                  }}>
                    <Text style={{color:'#ffff', fontWeight:'bold', textAlign:'center'}}>View</Text>
                  </TouchableOpacity>

              </View> */}
            </View>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}