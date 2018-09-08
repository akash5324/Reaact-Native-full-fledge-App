require('create-react-class');
import React, { Component } from "react";
import {
    StyleSheet,
    TextInput,
    Platform,
    ScrollView,
    TouchableOpacity,
    Image,
    View,
    Text,
    Button,
    BackHandler
  } from "react-native";
import { Row,Icon } from "native-base"; 



export default class referandearn extends Component {

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
        <ScrollView>
        <View style={{
            flex: 1,
            flexDirection: "column",
            justifyContent:"space-between"
          }}>
          <View style={{marginTop:15,marginBottom:15}}>
        <Image
        source={require(".././images/Dashboard/refer.png")}
        style={{
          alignSelf: "center",
          borderRadius: 100,
          width: 130,
          height: 130,
          marginTop: 40,
          marginBottom: 50
        }}
      />
      <Text style={ styles.TextStyle}>Gift {'\u20B9'}100 to your friend when they signup using </Text>
      <Text style={ styles.TextStyle}> your code. You earn {'\u20B9'}100 as well</Text>
      </View>
      <View style={{width:"80%",alignSelf:"center",marginBottom:15,marginTop:25}} >
       <Text style={styles.borderBox}>Your code: RISHV142557</Text>
      </View>
      <View style={{width:"100%",alignSelf:"center",flexDirection:"column",justifyContent:"center",marginTop:30}}>
     <View>
      <TouchableOpacity
              style={styles.ShareWhatsAppButtonStyle}
              activeOpacity={0.5}
              onPress={() => {
                console.log("");
              }}
            >
            <Image
        source={require(".././images/whatsApp.png")}
        style={{
          top:10,
          width:40,
          height:40,
          left:10
        }}
        />
      
            <Text style={styles.ShareTextStyle}> Share On WhatsApp </Text>
      </TouchableOpacity>
  </View>
  <View>
             <TouchableOpacity
              style={styles.ShareOthersButtonStyle}
              activeOpacity={0.5}
              onPress={() => {
                console.log("");
              }}
            >
            <Image
             source={require(".././images/share.png")}
             style={{
             top:10,
             width:40,
             height:40,
             left:10
              }}
             />
      
              <Text style={styles.ShareOthersTextStyle}> Share On Others </Text>
            </TouchableOpacity>
      </View>       

      </View>
      </View>
      </ScrollView>

    );
  }
}



const styles = StyleSheet.create({
  
    TextStyle: {
     
      textAlign: "center",
      margin: 0,
      fontSize: 16,
    },
    ShareTextStyle: {
     
        textAlign: "center",
        margin: 0,
        fontSize: 20,
        color:"#fff",
        fontWeight:'200',
        top:-23,
        
      },
      ShareOthersTextStyle: {
     
        textAlign: "center",
        margin: 0,
        fontSize: 20,
        color:"black",
        fontWeight:'200',
        top:-23,
        
      },
    borderBox:{
      borderRadius: 20,
      borderWidth: 1,
      textAlign:"center",
      fontSize: 25,
      fontWeight: '300',
      color:"black",
      padding: 14,
      margin:6,
      padding:15,
     
    },
    ShareOthersButtonStyle: {
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: "#f7f8f9",
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "#fff",
        marginBottom:15,
        elevation: 2,
        marginTop:10
      },

    ShareWhatsAppButtonStyle: {
        marginTop:5,
        marginBottom:0,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: "#25d366",
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "#fff",
        elevation: 2,
      },

  });