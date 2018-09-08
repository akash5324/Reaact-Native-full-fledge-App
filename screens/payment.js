import React, { Component } from 'react'; 
import { Container, Header, Content, Card, CardItem, Text, Body,Input,Item,Left,Thumbnail,Right,List,ListItem } from 'native-base';
import {ScrollView,FlatList,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
export default class App extends Component { 
  render() {
   return ( 

    <Container style={{backgroundColor:'grey'}}>
        <Header />
<ScrollView>

{/* card details */}

<Card style={{height:350,marginLeft:5,marginRight:5}}>

<Content>

<View>
  
  {/*  Top view */}
    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
      
      <Text style={{padding:10,fontWeight:'bold'}}>Total amount to be Paid</Text>

      <Text style={{padding:10,color:'red'}}>Rs. 2,999</Text>
    </View>

  {/* bottom view */}

  <View style={styles.formView}>

          <View>
            

            <TextInput style={styles.Inputs} placeholder='Card Holders Name' placeholderTextColor="#000" underlineColorAndroid='rgba(0,0,0,0)'
            /> 
            <TextInput style={styles.Inputs} placeholder='XXXX-XXXX-XXXX-XXXX' placeholderTextColor="#000" underlineColorAndroid='rgba(0,0,0,0)'
            /> 
            <TextInput style={styles.Inputs}  placeholder='CVV' placeholderTextColor="#000" underlineColorAndroid='rgba(0,0,0,0)'
            /> 
            <TextInput style={styles.Inputs}  placeholder='Valid Thru' placeholderTextColor="#000" underlineColorAndroid='rgba(0,0,0,0)'
            /> 

          </View>
  </View>

{/* button view */}

     <View style={styles.clickMe}>

        <TouchableOpacity
        style={{
          width:150,
          height:40,
          borderRadius:30,
          backgroundColor:'#F08080',
          justifyContent:'center',
          alignItems:'center'

        }}
        >
        <Text style={styles.MyTex}>Proceed</Text>
        </TouchableOpacity>

        </View>
</View>

</Content>
</Card>

{/* wallets details */}

<Card style={{height:250,marginLeft:5,marginRight:5}}>

<Content>

<View>
  
  {/* top view */}
    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{padding:10,fontWeight:'bold'}}>Wallets</Text>
      <TouchableOpacity>
      <Text style={{padding:10,color:'red'}}>More Wallets</Text>
      </TouchableOpacity>
    </View>

{/* bottom view */}
    <View style={{flex:1,flexDirection:'column',padding:10,marginBottom:'5%'}}>

           <View style={{flex:1,flexDirection:'row',alignItems:'center',marginBottom:'5%'}}>
           <Thumbnail  source={{ uri: 'https://cdn0.iconfinder.com/data/icons/Pinterest/128/Pinterest_Favicon.png' }}/>
           <TouchableOpacity style={{marginLeft:'5%'}}>
           <Text style={{color:'#999'}}>Paytm</Text>
           </TouchableOpacity>
            </View>

            <View style={{flex:1,flexDirection:'row',alignItems:'center',marginBottom:'5%'}}>
            <Thumbnail  source={{ uri: 'https://cdn0.iconfinder.com/data/icons/Pinterest/128/Pinterest_Favicon.png' }} />
            <TouchableOpacity style={{marginLeft:'5%'}}>
            <Text style={{color:'#999'}}>Airtel Money</Text>
            </TouchableOpacity>
            </View>

    </View>

    </View>

</Content>
</Card>

{/* UPI PAyment  details */}

<Card style={{height:250,marginLeft:5,marginRight:5}}>

<Content>

<View>
  
  {/* top view */}
    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
      
      <Text style={{padding:10,fontWeight:'bold'}}>UPI Payment Options</Text>

    </View>

{/* bottom view */}

    <View style={{flex:1,flexDirection:'column',padding:10,marginBottom:'5%'}}>

           <View style={{flex:1,flexDirection:'row',alignItems:'center',marginBottom:'5%'}}>
           <Thumbnail  source={{ uri: 'https://cdn0.iconfinder.com/data/icons/Pinterest/128/Pinterest_Favicon.png' }}/>
           <TouchableOpacity style={{marginLeft:'5%'}}>
           <Text style={{color:'#999'}}>Tez</Text>
           </TouchableOpacity>
            </View>

            <View style={{flex:1,flexDirection:'row',alignItems:'center',marginBottom:'5%'}}>
            <Thumbnail  source={{ uri: 'https://cdn0.iconfinder.com/data/icons/Pinterest/128/Pinterest_Favicon.png' }} />
            <TouchableOpacity style={{marginLeft:'5%'}}>
            <Text style={{color:'#999'}}>BHIM</Text>
            </TouchableOpacity>
            </View>

    </View>

</View>

</Content>
</Card>


 {/* NEt banking Details */}


 <Card style={{height:200,marginLeft:5,marginRight:5}}>

<Content>

<View>
  
  {/*  top view */}
    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
      
      <Text style={{padding:10,fontWeight:'bold'}}>Net Banking</Text>

      <TouchableOpacity>
      <Text style={{padding:10,color:'red'}}>More Banks</Text>
      </TouchableOpacity>
            
    </View>

{/* bottom view */}
    <View style={{flex:1,flexDirection:'row',padding:10}}>

           <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
           <Thumbnail  source={{ uri: 'https://cdn0.iconfinder.com/data/icons/Pinterest/128/Pinterest_Favicon.png' }}/>
           <TouchableOpacity style={{marginTop:'5%'}}>
           <Text style={{color:'#999'}}>SBI</Text>
           </TouchableOpacity>
            </View>

        <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
           <Thumbnail  source={{ uri: 'https://cdn0.iconfinder.com/data/icons/Pinterest/128/Pinterest_Favicon.png' }}/>
           <TouchableOpacity style={{marginTop:'5%'}}>
           <Text style={{color:'#999'}}>AXIS</Text>
           </TouchableOpacity>
            </View>

            <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
           <Thumbnail  source={{ uri: 'https://cdn0.iconfinder.com/data/icons/Pinterest/128/Pinterest_Favicon.png' }}/>
           <TouchableOpacity style={{marginTop:'5%'}}>
           <Text style={{color:'#999'}}>ICICI</Text>
           </TouchableOpacity>
            </View>

            <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
           <Thumbnail  source={{ uri: 'https://cdn0.iconfinder.com/data/icons/Pinterest/128/Pinterest_Favicon.png' }}/>
           <TouchableOpacity style={{marginTop:'5%'}}>
           <Text style={{color:'#999'}}>HDFC</Text>
           </TouchableOpacity>
            </View>

    </View>

</View>

</Content>
</Card>

</ScrollView>       
            </Container>

         
    );
  }
}

const styles = StyleSheet.create({
formView:{
  margin:'2%',
  height:220,
  width:'auto',
  backgroundColor:'rgb(220,220,220)',
  borderRadius:10,
  padding:20
},
  Inputs:{

    alignSelf:'stretch',
    height:40,
    marginBottom:0,
    marginTop:5,
    color:'#000',
    fontSize:18,
    padding:5,
    borderWidth:2,
    borderColor:'grey',
    borderRadius:50,
    backgroundColor:'#C0C0C0'
  },

   MyTex:{
    fontSize:18,
    color:'#ffff',
    fontWeight:'800'
  },


clickMe:{

    flex:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  }

});