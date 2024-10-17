import React, { Component, useState } from "react";
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from './TabNavigation';  // Adjust the path if necessary
import AuthNavigation from './AuthNavigation';  // Adjust the path if necessary
import { useUserStore } from "@/store/useUserStore";

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const RootNavigation = () => {
  const {session} = useUserStore();
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
        { session && session.user ? (
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        ) : (
          <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        )}
      </Stack.Navigator>
  );
};

export default RootNavigation;