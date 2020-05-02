import React, { useState } from 'react';
import { AppLoading } from 'expo'

import {View, Text} from 'react-native'

import * as Font from 'expo-font'

import Home from './pages/Home'
import Product from './pages/Product'
import Profile from './pages/Profile'
import Ranking from './pages/Ranking'
import About from './pages/About'
import History from './pages/History'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductList from './pages/ProductList';

const getFont = () => Font.loadAsync({
  'Tauri': require('../assets/fonts/Tauri-Regular.ttf')
})

const Drawer = createDrawerNavigator();

import DrawerContent from './DrawerContent'

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Home" 
          screenOptions={{
            headerShown: false
          }}
          drawerContent={props => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Product" component={Product} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Ranking" component={Ranking} />
          <Drawer.Screen name="ProductList" component={ProductList} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="History" component={History} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontsLoaded(true)} />
    )
  }
}
