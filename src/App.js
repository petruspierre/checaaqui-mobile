import React, { useState } from 'react';
import { AppLoading } from 'expo'
import { AsyncStorage, Alert }  from 'react-native'

import * as Font from 'expo-font'

import Home from './pages/Home'
import Product from './pages/Product'
import Profile from './pages/Profile'
import Ranking from './pages/Ranking'
import About from './pages/About'
import History from './pages/History'
import Auth from './pages/Auth'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductList from './pages/ProductList';

async function initialConfig(){
  try{
    //await AsyncStorage.setItem('token', '123') // SETAR O TOKEN
    //await AsyncStorage.removeItem('token') // REMOVER O TOKEN
    const value = await AsyncStorage.getItem('token') // RETORNA O TOKEN, QUANDO FOR NULL NAO TEM SESSÃO EXISTENTE.
    console.log(value)
  
    Font.loadAsync({
      'Tauri': require('../assets/fonts/Tauri-Regular.ttf')
    })
  } catch(error){
    console.log(error)
  }
}

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
          <Drawer.Screen name="Auth" component={Auth} />
          <Drawer.Screen name="History" component={History} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <AppLoading startAsync={initialConfig} onFinish={() => setFontsLoaded(true)} />
    )
  }
}
