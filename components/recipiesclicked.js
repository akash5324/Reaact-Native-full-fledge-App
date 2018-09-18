require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image,Alert, TouchableOpacity,TextInput, ImageBackground, ScrollView, StatusBar,  BackHandler,AsyncStorage } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right, Footer, Picker,Card,CardItem,Title} from 'native-base';

export default class recipiesclicked extends React.Component{

     constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state={

       data:[],
       blogs:[],
       clinic_id:1,
       blogId:''
    }
}

    componentDidMount(){

    AsyncStorage.getItem('blog_id').then((value) => {

           this.setState({ blogId:value })
 
    });


    fetch('http://erp.asksheela.com/User/blog?clinic_id='+this.state.clinic_id, {
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
                
                data:responseJson['data']

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
    render(){
        const {navigate}=this.props.navigation;
        var {data,blogs}=this.state;
         blogs = data.map(result =>{

        if(this.state.blogId===result.blog_id){

    return(

<Card style={{flex: 0}} key={result.blog_id}>

                            <CardItem>
                              <Left>
                                <Body>
                                  <Text note style={{color:'green'}}>{result.blog_post_date}</Text>
                                  <Text>{result.blog_by}</Text>
                                </Body>
                              </Left>
                            </CardItem>
                            <CardItem>
                              <Body>
                                <Image source={require('.././images/1.png')} style={{height: 150, width:'100%', flex: 1}}/>
                                <Text style={{marginTop:5,fontSize:20,color:'#fc8080',fontWeight:'bold'}}>
                                  {result.blog_title}
                                </Text>
                              </Body>
                            </CardItem>
                              <CardItem>
                              <Body>
                                <Text style={{marginTop:5,fontSize:14,color:'#000'}}>
                                  {result.blog_description}
                                </Text>
                              </Body>
                            </CardItem>
                           
          </Card>



        )
}
})

        return(
            <View style={{flex:1, backgroundColor:'#ecefef'}}>
            <ScrollView>
               
               {blogs}
            </ScrollView>
            </View>
        );
    }
}