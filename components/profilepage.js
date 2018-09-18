require('create-react-class');
import React, { Component } from 'react'; 
import { Container, Header, Content, Card, CardItem, Text, Body,Input,Item,Left,Thumbnail,Right,List,ListItem,Icon,Title,Button} from 'native-base';
import {ScrollView,FlatList,View,TextInput,StyleSheet,Image,TouchableOpacity,AsyncStorage,BackHandler} from 'react-native';

export default class profilepage extends Component { 

    constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state={

      userName:'',
      userEmail:'',
      userPhone:'',
      userDob:'',
      age:'',
      weight:'',
      height:'',
      food_preference:'',
      medical_history:''
    }
}

componentDidMount() {
let keys=['user_name','user_email','user_phone','user_dob','weight','height','food_preference','medical_history']
      AsyncStorage.multiGet(keys).then((result) => {

           this.setState({

            userName:result[0][1],

            userEmail:result[1][1],

            userPhone:result[2][1],

            userDob:result[3][1],

            height:result[4][1],

            weight:result[5][1],

            food_preference:result[6][1],

            medical_history:result[7][1]

             })
 
    });

    //const {today}=new Date();
     
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
     const { navigate } = this.props.navigation;
   return ( 


    <Container style={{backgroundColor:'#fff',flex:1}}>


               <Header style={{backgroundColor:"green"}}>
          <Left style={{flex:1}}>

            <Button transparent onPress={()=>navigate('Dashboard')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body  style={{flex:1,alignSelf:'center',justifyContent:'center'}}>
            <Title>Profile</Title>
          </Body>
          <Right style={{flex:1}}/>
        </Header>
{/* background image details */}

      <View style={{flex:6,marginTop:2}}>


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

              <Text style={{fontSize:22,fontWeight:'bold'}}>{this.state.userName}</Text>

               <View style={{flex:2,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>

               <Icon active name="md-mail" style={{color:'#d34836'}} />
              <Text style={{padding:5,color:'grey'}}>{this.state.userEmail}</Text>
               <Icon active name="md-call" style={{color:'#34AF23'}}/>
              <Text style={{padding:5,color:'grey'}}>{this.state.userPhone}</Text>

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
              <Text>{this.state.weight}</Text>
            </Right>
          </ListItem>

            <ListItem icon>
            <Body>
              <Text style={{color:'grey'}}>Height</Text>
            </Body>
            <Right>
              <Text>{this.state.height}</Text>
            </Right>
          </ListItem>

            <ListItem icon>
            <Body>
              <Text style={{color:'grey'}}>Food Preferences</Text>
            </Body>
            <Right>
              <Text>{this.state.food_preference}</Text>
            </Right>
          </ListItem>

            <ListItem icon>
            <Body>
              <Text style={{color:'grey'}}>Medical History</Text>
            </Body>
            <Right>
              <Text>{this.state.medical_history}</Text>
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
                  onPress={()=>navigate('Welcome')}
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