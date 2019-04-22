import React, { Component } from 'react'; 
import { Container, Header, Content, Card, CardItem, Text, Body,Input,Item,Left,Thumbnail,Right,List,ListItem,Icon,Button,Title } from 'native-base';
import {ScrollView,FlatList,View,TextInput,StyleSheet,Image,TouchableOpacity,ImageBackground,BackHandler,AsyncStorage,Alert} from 'react-native';
//import CalendarStrip from 'react-native-calendar-strip';
//import moment from 'moment';

 

export default class App extends Component { 


  constructor(props) {
    super(props)

    this.state={

      client_id:1,
      data:[],
      diet:[],
      food:[]
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}

componentDidMount(){


    //    AsyncStorage.getItem('clientId').then((item) => {

    //        this.setState({client_id:item})
 
    // });

     fetch('http://13.229.140.216/index.php/User/get_my_meal?client_id='+this.state.client_id, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            }                       
      })
          .then((response) => response.json())
          .then((responseJson) => {
           
              if(responseJson['status'])
              {
                this.setState({
                
                data:responseJson['my_diet'].meal

                })    

                 // Alert.alert(String(this.state.data[1].blog_id));
              }
            //this.saveItem('user_id',responseJson.user_id);
             else
             Alert.alert(responseJson['data']);
          })
          .catch((error) => {
            console.error(error);
          });

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

        const {navigate}=this.props.navigation;
        var {data,diet,food}=this.state;


//          food=data.map(result =>{

//         if((this.state.client_id)!==''){

//           for (var i = 0; i < result.length; i++) {
              
//               for(var j=0;j<result[i].foods.length;j++){


//                     return(


//             <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}} key={result[i].foods[j].food_id}>
//             <Text style={styles.text}>
//             <Text style={styles.dot}>.</Text>
//             {result.foods[i].food_name}
//             </Text>
//           </View>
//         )


//               }
//           }

      
// }
// })
        diet=data.map(result =>{
             //var haha = data[i].foods[j].food_name;
          if((this.state.client_id)!==''){

          return(

        <Card style={{height:200,marginTop:0}} key={result.meal_id}>
        <ImageBackground source={require('.././images/4.png')} style={{width: '100%', height: '100%'}}>
       
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Text style={{color:'#FC8080',fontWeight:'bold',fontSize:24}}>{result.meal_name}</Text>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:24}}>{result.meal_time}</Text>
        </View>

          <View style={{flex:1,flexDirection:'row',justifyContent:'center',justifyContent:'space-around'}}>

          {
            result.foods.map(fd =>


          <View key={fd.food_id}>
          <Text style={styles.text}>
          <Text style={styles.dot}>.</Text>
          {fd.food_name}
          </Text>
        </View>



              )
          }

          </View>

     
        </ImageBackground>
      </Card>

        )

            } 
})



   return ( 

    <Container style={{backgroundColor:'#fff',flex:1}}>
           <Header style={{backgroundColor:"green"}}>
          <Left style={{flex:1}}>

            <Button transparent onPress={()=>navigate('Dash')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body  style={{flex:1,alignSelf:'center',justifyContent:'center'}}>
            <Title>My Diet</Title>
          </Body>
          <Right style={{flex:1}}/>
        </Header>
<View style={{flex:12,marginBottom:10}}>

    <ScrollView style={{paddingTop:20}}>

    { diet }

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