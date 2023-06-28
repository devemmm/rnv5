import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from "./screens/DrawerContent"
import SupportScreen from './screens/SupportScreen';
import SettingScreen from './screens/SettingScreen';
import BookmarkScreen from './screens/BookmarkScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Homes'
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
        <Drawer.Screen name='Homes' component={MainTabScreen} />
        <Drawer.Screen name='Support' component={SupportScreen} />
        <Drawer.Screen name='Setting' component={SettingScreen} />
        <Drawer.Screen name='Bookmark' component={BookmarkScreen} />

      </Drawer.Navigator>

    </NavigationContainer>
  )
}


export default App;
