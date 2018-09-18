import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,TouchableHighlight,AsyncStorage } from 'react-native';

export default class welcomeScreen extends React.Component {

   constructor() {
    super();
    this.state = {user_name:''};
  }

  componentDidMount(){

        AsyncStorage.getItem('user_name').then((item) => {

           this.setState({ user_name:item })
 
    });

  }

    render() {

      const {navigate}=this.props.navigation;
    return (
      <View style={styles.container}>
        
        <View style={styles.mainSection}>
            <Text style={{fontSize:30,color:'red',marginTop:'40%',marginBottom:'5%'}}>Hi {this.state.user_name} ,</Text>

            <Text style={{fontSize:20,color:'#999',textAlign:'center'}}>Welcome, we can help you</Text> 
            <Text style={{fontSize:20,color:'#999',textAlign:'center'}}>to maintain your fitness and health</Text>

        </View>

        <View style={styles.clickMe}>

        <TouchableOpacity
        onPress={()=>navigate('Dash')}
        style={{
          width:300,
          height:50,
          borderRadius:30,
          backgroundColor:'#F08080',
          justifyContent:'center',
          alignItems:'center'

        }}
        >
        <Text style={styles.MyTex}>Continue</Text>
        </TouchableOpacity>

        </View>  
     


      </View>

   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
mainSection:{
  flex:12,
  backgroundColor:'#fff',
  alignItems:'center',
},
  clickMe:{

    flex:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  wrapButton:{

    padding:40,
    height:100,
    width:"80%"
  },

  button:{
      borderRadius:20,
    backgroundColor: '#1155DD',
    height:50
  },
  MyTex:{
    fontSize:18,
    color:'#ffff',
    fontWeight:'800'
  }

});
