import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TransitionPresets, createStackNavigator} from "@react-navigation/stack"
import HomeScreen from '../../tabs/home/HomeScreen'

const Stack = createStackNavigator()

const HomeNavigation = () => {
    return(
       <Stack.Navigator
       screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
        animationEnabled: true,
        gestureEnabled: true,
        gestureDirection: "horizontal",
       }}
       
       >
            <Stack.Screen name="HomeScren" component={HomeScreen} />
       </Stack.Navigator>
    )
}
export default  HomeNavigation 