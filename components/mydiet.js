import React, { Component } from 'react'; 
import { Container, Header, Content, Card, CardItem, Text, Body,Input,Item,Left,Thumbnail,Right,List,ListItem,Icon } from 'native-base';
import {ScrollView,FlatList,View,TextInput,StyleSheet,Image,TouchableOpacity,ImageBackground,BackHandler} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

  let datesWhitelist = [{
      start: moment(),
      end: moment().add(20, 'days')  // total 4 days enabled
    }];

export default class App extends Component { 


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

     
  render() {
   return ( 

    <Container style={{backgroundColor:'#fff',flex:1}}>
        <Header />

<View style={{flex:2}}>
  


            
              
                                  <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'background', duration: 100,highlightColor:'#fff'}}
                    style={{height: 100, paddingTop: 10, paddingBottom: 10}}
                    calendarHeaderStyle={{color: '#000'}}
                    calendarColor={'#FC8080'}
                    dateNumberStyle={{color: '#000'}}
                    dateNameStyle={{color: '#000'}}
                    highlightDateNumberStyle={{color: '#000'}}
                    highlightDateNameStyle={{color: '#000'}}
                    disabledDateNameStyle={{color: 'grey'}}
                    disabledDateNumberStyle={{color: 'grey'}}
                    weekendDateNumberStyle={{color: '#000'}}
                    weekendDateNameStyle={{color: '#000'}}
                    datesWhitelist={datesWhitelist}
                    iconContainer={{flex: 0.2}}
                />

            


     </View>   

{/* Date options */}



<View style={{flex:12,marginBottom:10}}>

    <ScrollView style={{paddingTop:20}}>
  
    <Card style={{height:200}}>
      
        <ImageBackground source={require('.././images/4.png')} style={{width: '100%', height: '100%'}}>

        <View style={{flex:1,alignSelf:'stretch',backgroundColor:'rgba(255,255,255,0.2)',paddingTop:20}}>
        
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Text style={{color:'#FC8080',fontWeight:'bold',fontSize:24}}>BreakFast</Text>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:24}}>08:00 AM</Text>
        </View>


        
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Text style={styles.text}>
          <Text style={styles.dot}>.</Text>
          Milk
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Salad
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Butter
          </Text>
        </View>

        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Bread
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Biscuit
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Rice
          </Text>
        </View>

        </View>
        </ImageBackground>
      </Card>


       <Card style={{height:200}}>
      
        <ImageBackground source={require('.././images/4.png')} style={{width: '100%', height: '100%'}}>

        <View style={{flex:1,alignSelf:'stretch',backgroundColor:'rgba(255,255,255,0.2)',paddingTop:20}}>
        
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Text style={{color:'#FC8080',fontWeight:'bold',fontSize:24}}>BreakFast</Text>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:24}}>08:00 AM</Text>
        </View>


        
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Text style={styles.text}>
          <Text style={styles.dot}>.</Text>
          Milk
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Salad
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Butter
          </Text>
        </View>

        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Bread
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Biscuit
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Rice
          </Text>
        </View>

        </View>
        </ImageBackground>
      </Card>


       <Card style={{height:200}}>
      
        <ImageBackground source={require('.././images/4.png')} style={{width: '100%', height: '100%'}}>

        <View style={{flex:1,alignSelf:'stretch',backgroundColor:'rgba(255,255,255,0.2)',paddingTop:20}}>
        
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Text style={{color:'#FC8080',fontWeight:'bold',fontSize:24}}>BreakFast</Text>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:24}}>08:00 AM</Text>
        </View>


        
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Text style={styles.text}>
          <Text style={styles.dot}>.</Text>
          Milk
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Salad
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Butter
          </Text>
        </View>

        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Bread
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Biscuit
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Rice
          </Text>
        </View>

        </View>
        </ImageBackground>
      </Card>


       <Card style={{height:200}}>
      
        <ImageBackground source={require('.././images/4.png')} style={{width: '100%', height: '100%'}}>

        <View style={{flex:1,alignSelf:'stretch',backgroundColor:'rgba(255,255,255,0.2)',paddingTop:20}}>
        
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Text style={{color:'#FC8080',fontWeight:'bold',fontSize:24}}>BreakFast</Text>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:24}}>08:00 AM</Text>
        </View>


        
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Text style={styles.text}>
          <Text style={styles.dot}>.</Text>
          Milk
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Salad
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Butter
          </Text>
        </View>

        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Bread
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Biscuit
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Rice
          </Text>
        </View>

        </View>
        </ImageBackground>
      </Card>


       <Card style={{height:200}}>
      
        <ImageBackground source={require('.././images/4.png')} style={{width: '100%', height: '100%'}}>

        <View style={{flex:1,alignSelf:'stretch',backgroundColor:'rgba(255,255,255,0.2)',paddingTop:20}}>
        
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Text style={{color:'#FC8080',fontWeight:'bold',fontSize:24}}>BreakFast</Text>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:24}}>08:00 AM</Text>
        </View>


        
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Text style={styles.text}>
          <Text style={styles.dot}>.</Text>
          Milk
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Salad
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Butter
          </Text>
        </View>

        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Bread
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Biscuit
          </Text>
          <Text style={styles.text}>
           <Text style={styles.dot}>.</Text>
          Rice
          </Text>
        </View>

        </View>
        </ImageBackground>
      </Card>


       

      </ScrollView>
      </View> 
      
            </Container>

         
    );
  }
}

const styles = StyleSheet.create({


  text:{

    color:'#F8F8F8',
    fontSize:18,
    fontWeight:'bold'
  },

  dot:{

    fontSize:30,
    fontWeight:'bold',
    color:'#fff'
  }
});