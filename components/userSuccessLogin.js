import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,TouchableHighlight } from 'react-native';

export default class userSuccessLogin extends React.Component {

    render() {
      const {navigate}=this.props.navigation;
    return (
      <View style={styles.container}>
        
        <View style={styles.mainSection}>
            <Text style={{fontSize:30,color:'red',marginTop:'40%',marginBottom:'5%',textAlign:'center'}}>Thank You For Joining AskSheela ,</Text>

            <Text style={{fontSize:20,color:'#999',textAlign:'center'}}>please click below</Text> 
            <Text style={{fontSize:20,color:'#999',textAlign:'center'}}>to start your journey with us</Text>

        </View>

        <View style={styles.clickMe}>

        <TouchableOpacity

        onPress={()=>navigate('emailLogin')}
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
  justifyContent:'center'
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
