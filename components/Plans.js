require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, StatusBar, Colors,BackHandler } from 'react-native';
import { Icon, Button, Container, Header, Body, Content,Left, Right,Title} from 'native-base';

class Plans extends React.Component{

  
static navigationOptions={

  header:null
}
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
       const { navigate } = this.props.navigation;

      return(
        <Container>

        <Header style={{backgroundColor:"green"}}>
          <Left style={{flex:1}}>

            <Button transparent onPress={()=>navigate('Dashboard')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body  style={{flex:1,alignSelf:'center',justifyContent:'center'}}>
            <Title>Track Weight</Title>
          </Body>
          <Right style={{flex:1}}/>
        </Header>

          <Content>
            <View style={{flex:1, backgroundColor:'#ecefef'}}>
              <View style={{height: 195, backgroundColor:'#ffff', marginTop:8}}>
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

            
          </ScrollView>
      </View>


      <View style={{ flexDirection:'column', marginTop: 8, backgroundColor:'#ffff'}}>


    

        <View style={{ flexDirection:'row'}}>
          <View style={{flex:1, height:150}}>
          <TouchableOpacity
          style={{ flex:1, width:'100%',padding:3 }}
          >
            <ImageBackground
              source={{
                uri:
                  'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
              }}
              style={{ flex:1, width:'100%' }}
            >
            <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 1</Text>
            </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={{flex:1, height:150}}>
          <TouchableOpacity
          style={{ flex:1, width:'100%' ,padding:3}}
          >
            <ImageBackground
              source={{
                uri:
                'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
              }}
              style={{flex:1, width:'100%' }}
          >
          <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 2</Text>
            </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
     
        
        <View style={{ flexDirection:'row'}}>
          <View style={{flex:1, height:150}}>
          <TouchableOpacity
          style={{ flex:1, width:'100%',padding:3}}
          >
            <ImageBackground
              source={{
                uri:
                  'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
              }}
              style={{ flex:1, width:'100%' }}
            >
            <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 3</Text>
            </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={{flex:1, height:150}}>
          <TouchableOpacity
          style={{ flex:1, width:'100%',padding:3 }}
          >
            <ImageBackground
              source={{
                uri:
                'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
              }}
              style={{flex:1, width:'100%' }}
          >
          <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 4</Text>
            </ImageBackground>
            </TouchableOpacity>

          </View>
        </View>


        <View style={{ flexDirection:'row'}}>
          <View style={{flex:1, height:150}}>
          <TouchableOpacity
          style={{ flex:1, width:'100%',padding:3 }}
          >
            <ImageBackground
              source={{
                uri:
                  'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
              }}
              style={{ flex:1, width:'100%' }}
            >
            <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 5</Text>
            </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={{flex:1, height:150}}>
          <TouchableOpacity
          style={{ flex:1, width:'100%',padding:3 }}
          >
            <ImageBackground
              source={{
                uri:
                'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
              }}
              style={{flex:1, width:'100%' }}
          >
          <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 6</Text>
            </ImageBackground>
            </TouchableOpacity>
  
          </View>
        </View>


          {/*  <View style={{ flexDirection:'row'}}>
          //   <View style={{ backgroundColor:'black'}}>
          //     <ImageBackground
          //       source={{
          //         uri:
          //           'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
          //       }}
          //       style={{ width:'100%' }}
          //     >
          //     <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 3</Text>
          //     </ImageBackground>
          //   </View>
          //   <View>
          //     <ImageBackground
          //       source={{
          //         uri:
          //         'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
          //       }}
          //       style={{width:'100%' }}
          //   >
          //   <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 4</Text>
          //     </ImageBackground>

          //   </View>
          // </View>





          //   <View style={{ flexDirection:'row'}}>
          //     <View style={{}}>
          //       <ImageBackground
          //         source={{
          //           uri:
          //             'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
          //         }}
          //         style={{ width:'100%' }}
          //       >
          //       <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 5</Text>
          //       </ImageBackground>
          //     </View>
          //   <View>
          //       <ImageBackground
          //         source={{
          //           uri:
          //           'https://thumbs.dreamstime.com/b/tropical-fruits-black-background-mix-53900170.jpg',
          //         }}
          //         style={{ width:'100%' }}
          //     >
          //     <Text style={{color:'white', alignSelf: 'center', marginTop: 65, fontSize:20}}>Diet 6</Text>
          //       </ImageBackground>

          //     </View>
          //   </View>
 */}




            </View>



          </View>
          </Content>
        </Container>
      );
    }
}

export default Plans;
