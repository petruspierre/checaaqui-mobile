import React, { useState } from 'react';
import { AppLoading } from 'expo'

import * as Font from 'expo-font'

import Home from './pages/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const getFont = () => Font.loadAsync({
  'Tauri': require('../assets/fonts/Tauri-Regular.ttf')
})

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home" 
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontsLoaded(true)} />
    )
  }
}
