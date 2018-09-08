import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,TextInput, ScrollView, TouchableHighlight } from 'react-native';
export default class App extends React.Component {

  action =()=>{


  }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>

      
        
        <View style={styles.mainSection}>
            <Text 
            style={{fontSize:20,color:'#000',marginTop:'4%',fontWeight:'bold',marginBottom:'6%', borderBottomColor: 'black',
    borderBottomWidth:1}}>
            Balance:5,000/m
            </Text>
            <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:0}}>
            <View style={{flex:1, marginLeft:20}}>
                  
                  <Text style={{textAlign:'left',fontSize:16,color:'#999',marginBottom:'2%'}}>3 Months</Text>
                  <Text style={{textAlign:'left',fontSize:16,color:'#999',marginBottom:'2%'}}>You Save</Text>
                  <Text style={{textAlign:'left',color:'#999',marginBottom:'2%'}}>10% discount(months)</Text>
                  <Text style={{textAlign:'left',color:'#999',marginBottom:'2%'}}>Refferal Bonus</Text>
                  <Text style={{textAlign:'left',color:'#999',marginBottom:'2%'}}>Promo code</Text>

                
                
           </View>
            <View style={{flex:1, marginRight:20}}>

                     <Text style={{textAlign:'right',color:'#999',marginBottom:'2%'}}>2,999/m</Text>      
                   <Text style={{textAlign:'right',color:'#999',marginBottom:'2%'}}>1,100</Text>
                   <Text style={{textAlign:'right',color:'#999',marginBottom:'2%'}}>- 900</Text>
                   <Text style={{textAlign:'right',color:'#999',marginBottom:'2%'}}>- 100</Text>
                   <Text style={{textAlign:'right',color:'#999',marginBottom:'2%'}}>- 100</Text>
            </View>
            </View>

            <View style={{marginLeft:10, marginRight:10, flexDirection:'row', justifyContent:'space-between',borderTopColor:'#999',borderTopWidth:1,marginBottom:'10%',borderBottomColor:'#999',borderBottomWidth:1}}>
              <View style={{flex:1, paddingTop:10, paddingBottom:10}}>
                  
                  <Text style={{fontSize:16,color:'#000',paddingLeft:10,fontWeight:'bold'}}>You Pay</Text>
          
              </View>
              <View style={{paddingTop:10, paddingBottom:10}}>

                     <Text style={{color:'#000',paddingRight:10,fontWeight:'bold'}}>1,899/m</Text>      
              
              </View>
            </View>



            <View style={{flexDirection:'row',borderColor:'grey',borderWidth:0.5}}>
            
            <TextInput style={{width:'60%'}}/>
            <View style={{justifyContent:'center'}}>
                  <TouchableOpacity>
                     <Text style={{color:'#999',paddingRight:10,color:'red'}}>Apply</Text>
                  </TouchableOpacity>  
            </View>

            </View>

              <Text style={{textAlign:'center',color:'red'}}>Promo code is incorrect.Please check and try Again.</Text>
     
                 
        </View>

        <View style={styles.clickMe}>

        <TouchableOpacity
        style={{
          width:300,
          height:50,
          borderRadius:30,
          backgroundColor:'#F08080',
          justifyContent:'center',
          alignItems:'center'
        }}
        >
        <Text style={styles.MyText}>Proceed to Payment</Text>
        </TouchableOpacity>

        </View>  
     


      </View>
      </ScrollView>
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#DCDCDC',
  },

  mainSection:{
  flex:10,
  backgroundColor:'#fff',
  alignItems:'center',
  width:'auto',
  height:'50%',
  margin:'5%',
  flexDirection:'column',
  justifyContent: 'space-between',
   borderBottomRightRadius:40
},

  clickMe:{

    flex:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#DCDCDC'
  },

  MyText:{
    fontSize:18,
    color:'#ffff',
    fontWeight:'800'
  }

});
