import React, { Component, useState } from "react";
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from './TabNavigation';  // Adjust the path if necessary
import AuthNavigation from './AuthNavigation';  // Adjust the path if necessary

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const RootNavigation = () => {
    const [session, setSession] = useState(false);
  return (
      <Stack.Navigator
       screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            animationEnabled: true,
            gestureEnabled: true,
            gestureDirection: "horizontal"

        }}
      >
        { session ? (
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        ) : (
          <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        )}
      </Stack.Navigator>
  );
};

export default RootNavigation;