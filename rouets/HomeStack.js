import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import RevievDetails from '../screens/revievDetails';
import Header from '../shared/Header';
import React from 'react';
const screens ={
    
    Home:{
        screen:Home, 
        navigationOptions:({navigation}) =>{
           return{
            headerTitle:() =><Header navigation={navigation} title='GameZone'/>,
           } 
            
        }
    },
    RevievDetails:{
        screen:RevievDetails,
        navigationOptions:{
            
        }
    }
}
const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:"#444",
        headerStyle: { backgroundColor: '#eee',height:60 }
    }
})

export default HomeStack


