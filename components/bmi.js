require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image,Alert, TouchableOpacity,TextInput, ImageBackground, ScrollView, StatusBar,  BackHandler } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right, Footer, Picker,Title} from 'native-base';

export default class bmi extends React.Component{

static navigationOptions={

header:null
}
      constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state={

        height:'',
        Weight:'',
        bmi:'',
        user:'',
        age:''
    }
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
    
    updateUser = (user) => {
       this.setState({ user: user })
    }

bmiCalculate =()=>{

const {height,weight,age}=this.state;
    if( (height&&weight&&age)!=='')
    {

          let h=(this.state.height/100);
    let w=this.state.weight;
    const bmi=(w/(h*h)).toFixed(2)

    this.setState({bmi:bmi});

    }
    else{

        Alert.alert('Please fill up all the Fields');
    }
  
}
    render(){
        const { navigate } = this.props.navigation;
        return(
            <ScrollView showsVerticalScrollIndicator={false}>

               <Header style={{backgroundColor:"green"}}>
          <Left style={{flex:1}}>

            <Button transparent onPress={()=>navigate('Dash')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body  style={{flex:1,alignSelf:'center',justifyContent:'center'}}>
            <Title>BMI Calculator</Title>
          </Body>
          <Right style={{flex:1}}/>
        </Header>
                <View style={{flex:1, backgroundColor:'#ecefef'}}>

                    <View style={{height:450, marginTop:8, backgroundColor:'#ffff'}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{ width:'25%', height:100, alignItems:'center', marginTop:15}}>
                                <Text style={{fontSize:20,}}>Gender</Text>
                                <View style={{ flexDirection:'row', marginTop:5}}>
                                    <Image source={require('../images/Calculators/b.png')} style={{width:30, height:50}}/>
                                    <Image source={require('../images/Calculators/g.png')} style={{width:30, height:50}}/>
                                </View>
                            </View>
                            <View style={{ flex:1, height:100, alignItems:'center', marginTop:18}}>
                                <Text style={{fontSize:20,}}>Height</Text>
                                <TextInput style={{width:'80%', textAlign:'center', fontSize:20}} keyboardType='numeric' 
                                 onChangeText={(height)=>this.setState({height})}/>
                            </View>
                            <View style={{width:'25%', height:100, alignItems:'center',}}>
                            <Picker  selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{width:100}}>
                                <Picker.Item label = "Cm" value = "cm" />
                                <Picker.Item label = "Inch" value = "Inch" />
                            </Picker>
                            </View>
                        </View>
                            
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{ width:'25%', height:100, alignItems:'center', marginTop:15}}>
                                <Text style={{fontSize:20,}}>Age</Text>
                                <TextInput style={{ textAlign:'center', fontSize:20}} keyboardType='numeric'
                                onChangeText={(age)=>this.setState({age})}/>
                            </View>
                            <View style={{ flex:1, height:100, alignItems:'center', marginTop:18}}>
                                <Text style={{fontSize:20}}>Weight</Text>
                                <TextInput style={{width:'80%', textAlign:'center', fontSize:20}} keyboardType='numeric'
                                 onChangeText={(weight)=>this.setState({weight})}/>
                            </View>
                            <View style={{width:'25%', height:100, alignItems:'center',}}>
                                <Picker  selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{width:100}}>
                                    <Picker.Item label = "Kg" value = "Kg" />
                                    <Picker.Item label = "Lb" value = "Lb" />
                                </Picker>
                            </View>
                        </View>

                        <View style={{ flex:1}}>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                         onPress={this.bmiCalculate}
                        >
                            <Text style={styles.buttonText}>Calculate Your BMI</Text>
                        </TouchableOpacity>
                                <Text style={{fontSize:40,marginTop:20,color:'green'}}>{this.state.bmi}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop:8, height:230, backgroundColor:'#ffff', flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{ paddingLeft:10, paddingTop:15, paddingBottom:15, justifyContent:'space-between'}}>
                            <Text>Very Severely Underweight</Text>
                            <Text>Severely Underweight</Text>
                            <Text>Underweight</Text>
                            <Text>Normal</Text>
                            <Text>Overweight</Text>
                            <Text>Obese Class 1</Text>
                            <Text>Obese Class 2</Text>
                            <Text>Obese Class 3</Text>
                        </View>
                        <View style={{ paddingRight:10, paddingTop:15, paddingBottom:15, justifyContent:'space-between'}}>
                            <Text>{'< 16.0'}</Text>
                            <Text>16.0 - 16.9</Text>
                            <Text>17.0 - 18.4</Text>
                            <Text>18.5 - 24.9</Text>
                            <Text>25.0 - 29.9</Text>
                            <Text>30.0 - 34.9</Text>
                            <Text>35.0 - 39.9</Text>
                            <Text> 40.0</Text>
                        </View>

                    </View>

                    <View style={{marginTop:8, height:60, backgroundColor:'#ffff', marginBottom:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{paddingLeft:20}}>
                            <Text style={{color:'#3EBC64', fontSize:20,}}>Normal Weight</Text>
                        </View>
                        <View style={{paddingRight:20, flexDirection:'row'}}>
                            <Text style={{fontWeight:'bold'}}>53.4</Text><Text style={{fontWeight:'bold'}}> - </Text><Text style={{fontWeight:'bold'}}>72.1</Text><Text style={{fontWeight:'bold'}}> Kg</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({

    textinput:{
        width:'70%',
        paddingHorizontal:16,
        fontSize:16,
        marginTop:10,
    },
      button:{
        width:'80%',
        backgroundColor:'#EF5350',
        borderRadius:20,
        marginTop:30,
        marginBottom:10,
        alignItems:'center',
    },
     buttonText:{
        color:'white',
        fontSize:16,
        paddingTop:10,
        paddingBottom:10
    }
});