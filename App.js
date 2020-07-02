import React , {useState} from "react";
import * as Font from "expo-font";
import {AppLoading} from 'expo'
import Home from "./screens/Home";
import Navigator from './rouets/drawer'

const getFonts = () => Font.loadAsync({
    "lato-regular": require("./assets/Fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/Fonts/Lato-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) { 
    return <Navigator />;
  }else{
    return(
    <AppLoading
    startAsync={getFonts}
    onFinish={()=>setFontsLoaded(true)}
    />
    )
  }
}
