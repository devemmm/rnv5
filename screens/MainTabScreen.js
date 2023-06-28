import React from 'react'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Icons from "react-native-vector-icons/Ionicons"

import ExploreScreen from './ExploreScreen'
import ProfileScreen from './ProfileScreen'
import DetailScreen from './DetailScreen'
import HomeScreen from './HomeScreen'

const Tab = createMaterialBottomTabNavigator()


const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            barStyle={{ backgroundColor: '#009387' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icons name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={DetailScreen}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color }) => (
                        <Icons name="ios-notifications" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Icons name="ios-person" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Expore"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Expore',
                    tabBarIcon: ({ color }) => (
                        <Icons name="ios-aperture" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );

}

export default MainTabScreen