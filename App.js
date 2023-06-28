import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Details' component={DetailScreen} />
      </Drawer.Navigator>

    </NavigationContainer>
  )
}


export default App;
