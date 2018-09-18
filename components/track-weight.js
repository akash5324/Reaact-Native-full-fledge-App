require('create-react-class');
import React from 'react';
import { StyleSheet, Platform, View, Text, Image,Alert, TouchableOpacity,TextInput,Dimensions, ImageBackground, ScrollView, StatusBar,  BackHandler } from 'react-native';
import {Icon, Button, Container, Header, Body, Content,Left, Right, Footer,Card, Picker, Form,Title} from 'native-base';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;


export default class trackWeight extends React.Component{

static navigationOptions={

  header:null
}


  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
      this.state = {
      selected: "key1"
    };
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
onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

      render() {
        const {navigate}=this.props.navigation;
        return (

<Container style={{backgroundColor:'#DCDCDC'}}>

 <Header style={{backgroundColor:"green"}}>
          <Left style={{flex:1}}>

            <Button transparent onPress={()=>navigate('Dash')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body  style={{flex:1,alignSelf:'center',justifyContent:'center'}}>
            <Title>Track Weight</Title>
          </Body>
          <Right style={{flex:1}}/>
        </Header>

              <Card style={{flex:1,marginLeft:5,marginRight:5}}>
                                <LineChart
                                  data={{
                                    labels: ['10-02', '20-03', '10-04', '20-05', '20-06'],
                                    datasets: [{
                                      data: [
                                       80,30,60,55,20,40
                                      ]
                                    }]
                                  }}
                                  width={Dimensions.get('window').width} // from react-native
                                  height={220}
                                  chartConfig={{
                                    backgroundColor: '#fff',
                                    backgroundGradientFrom: '#fff',
                                    backgroundGradientTo: '#fff',
                                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                                    style: {
                                      borderRadius: 16
                                    }
                                  }}
                                  bezier
                                  style={{
                                    marginVertical: 8,
                                    borderRadius: 16
                                  }}
                                />
</Card>

<Card style={{flex:1,marginBottom:10,flexDirection:'column',alignItems:'center',marginLeft:5,marginRight:5,justifyContent:'space-around'}}>
    

        <Text style={{ fontSize:30,marginBottom:20,fontWeight:'bold'}}>Weight (Kg) </Text>
        <Text style={{fontSize:20,fontWeight:'bold',color:'tomato',marginTop:40}}>Choose your Weight</Text>
        <Content style={{marginTop:20}}>
            <Form style={{backgroundColor:'#FC8080'}}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width:200}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="30" value="key0" />
              <Picker.Item label="40" value="key1" />
              <Picker.Item label="50" value="key2" />
              <Picker.Item label="60" value="key3" />
              <Picker.Item label="70" value="key4" />
            </Picker>
          </Form>

          </Content>

        
</Card>

</Container>
            
        );
      }
}
