import React from 'react'
import {  Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown } from"react-native-reanimated";
import Button from "@/src/components/Button"
import ButtonOutline from '@/src/components/ButtonOutline';
import Breaker from "../../components/Breaker";

const WelcomeScreen = () => {
    return(
        <SafeAreaView className='felx-1 justify-between items-center bg-white'>

            <StatusBar style="auto" />

            <View className='w-full px-4 items-center justify-center spac-y-6 h-full '>

                {/* Welcome Text */}

                <View className="justify-center items-center">
                    <Animated.Text 
                    entering={FadeInDown.duration(100).delay(100).springify()}
                    className="text-neutral-800 text-3xl font-medium loading-[60px]"
                    style={{
                        fontFamily: "PlusJakartaSansBold"
                    }}
                    
                    >
                        Welcome
                    </Animated.Text>
                </View>

                {/* Login and Sign Up Button*/}
                <View className="w-full justify-start">
                    <Animated.View
                    entering={FadeInDown.duration(100).delay(300).springify()}
                    className="pb-6"
                    >
                        <Button title="Login" />
                    </Animated.View>
                    <Animated.View
                    entering={FadeInDown.duration(100).delay(400).springify()}
                    >
                        <ButtonOutline title="Sign Up"/>
                    </Animated.View>
                </View>

                {/*Breaker Line */}
                <View>
                    <Breaker/>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default WelcomeScreen