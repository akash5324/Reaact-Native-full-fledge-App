 import React from 'react';
import {StyleSheet, Text, View, Button, Image, ImageBackground} from 'react-native';
import { createDrawerNavigator, createStackNavigator, DrawerItems,createBottomTabNavigator } from 'react-navigation';
import {Content, Container, Header, Body, Icon} from 'native-base';
import Splash from './components/Splash.js';
import LoginSignup from './components/LoginSignup.js'
import Dash from './components/Dash.js';
import Plans from './components/Plans.js'
import signup1 from './components/signup1.js';
import emailLogin from './components/emailLogin.js';
import bmi from './components/bmi.js';
import SkipDash from './components/skipDash.js';
import diet from './components/diet';
import profilePage from './components/profilepage';
import referandearn from './components/referandearn';
import bmr from './components/bmr';
import bfp from './components/bfp';
import whr from './components/whr';
import recipies from './components/recipies';
import Profile from './components/profilepage';
import meals from './components/meals';
import blogs from './components/blogs';
import myDiet from './components/mydiet.js';
import bookAppointment from './components/bookAppointment';




const customDrawer = (props)=>(

  <Container>
    <Header style={{ height:200, marginBottom:8, paddingRight:0, paddingLeft:0, alignContent:'center', alignItems:'center', backgroundColor:'white'}}>
      
      <ImageBackground source={require('./images/drawerBackground.jpg')} style={{height:'100%', width:'100%'}}>
      <Body style={{alignContent:'center', alignItems:'center'}}>
        <Image
          source={require('./images/download.jpeg')}
          style={{height:100, width:100, borderRadius:55, marginTop:'10%'}}
          />
          <Text style={{marginTop:10,color:'white'}}>Natalie Portman</Text>
      </Body>
      </ImageBackground>
    </Header>
    <Content>
      <DrawerItems {...props} />  
    </Content>
  </Container>

);



 const Navi = createDrawerNavigator({

  Dashboard:{
    screen: Dash,
               navigationOptions:{

        drawerIcon:(
 <Icon name='ios-apps-outline' style={{color:'#F08080'}}/>
    )
}
  },

  'Plans and Packages':{
    screen: Plans,
    navigationOptions:{

              drawerIcon:(
 <Icon name='ios-copy-outline' style={{color:'#F08080'}}/>
    )
    }
  },

  'Book Your Appointment':{

    screen:bookAppointment,
    navigationOptions:{

        drawerIcon:(
 <Icon name='ios-clipboard-outline' style={{color:'#F08080'}}/>
    )
    }

  },
  'Ask Sheela':{
    screen:recipies,
               navigationOptions:{

        drawerIcon:(
 <Icon name='ios-female-outline' style={{color:'#F08080'}}/>
    )
}
  },
  'My Diet': {
    screen:myDiet,
               navigationOptions:{

        drawerIcon:(
 <Icon name='ios-list-box-outline' style={{color:'#F08080'}}/>
    )
}
  },

   'Health  Tips': {
    screen: recipies,
       navigationOptions:{

        drawerIcon:(
 <Icon name='ios-nutrition-outline' style={{color:'#F08080'}}/>
    )
}
  },

   'Recipies': {
    screen: meals,
               navigationOptions:{

        drawerIcon:(
 <Icon name='ios-restaurant-outline' style={{color:'#F08080'}}/>
    )
}
  },

   'Blogs': {
    screen: blogs,
               navigationOptions:{

        drawerIcon:(
 <Icon name='ios-bookmarks-outline' style={{color:'#F08080'}}/>
    )
}
  },

   'E-book': {
    screen: recipies,
               navigationOptions:{

        drawerIcon:(
 <Icon name='ios-book-outline' style={{color:'#F08080'}}/>
    )
}
  },

   'Tools': {
    screen: recipies,
               navigationOptions:{

        drawerIcon:(
 <Icon name='ios-construct-outline' style={{color:'#F08080'}}/>
    )
}
  },

    'About Diet Clinic': {
    screen: recipies,
               navigationOptions:{

        drawerIcon:(
 <Icon name='ios-stats-outline' style={{color:'#F08080'}}/>
    )
}
  },

    'Contact Us': {
    screen: recipies,
               navigationOptions:{

        drawerIcon:(
 <Icon name='ios-contacts-outline' style={{color:'#F08080'}}/>
    )
}
  },

  'Refer and Earn': {
    screen: referandearn,
               navigationOptions:{

        drawerIcon:(
 <Icon name='ios-share-outline' style={{color:'#F08080'}}/>
    )
}

  },

  Setting: {
    screen: profilePage,
           navigationOptions:{

        drawerIcon:(
 <Icon name='ios-settings-outline' style={{color:'#F08080'}}/>
    )
}
  }

},

{
    initialRouteName: 'Dashboard',
    contentComponent: customDrawer,
    drawerOpenRoute : 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'drawerToggle',
  });
export default Navi;