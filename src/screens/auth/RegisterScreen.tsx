import { ActivityIndicator, Text, View, Dimensions, Pressable } from 'react-native';
import React, {  useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { TextInput } from 'react-native';
import Button from "@/src/components/Button";
import Breaker from "../../components/Breaker";
import ButtonOutline from '@/src/components/ButtonOutline';
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get("window")

const RegisterScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setisLoading] = useState(false);

    const {navigate: navigateAuth}: NavigationProp<AuthNavigationType> = useNavigation()

    return(
        <View className="flex-1">
            {isLoading && (
                <View className="absolute z-50 h-full w-full justify-center items-center">
                    <View className="h-full w-full justify-center items-center bg-black opacity-[0.45]"></View>

                    <View className="absolute">
                        <ActivityIndicator size="large" color="white" />
                    </View>

                </View>
            )}

            <View className="justify-center items-center relative flex-1">

                <View className="justify-center w-full px-4 space-y-4"
                    style={{
                        height: height * 0.75
                    }}
                >
                    {/* Welcome Text */}
                    <Animated.View
                    className="justify-center items-center"
                    entering={FadeInDown.duration(100).springify()}
                    >
                        <Text className="text-neutral-800 text-2xl leading-[60px]"
                        style={{
                            fontFamily: "PlusJakartaSansBold",
                        }}
                        >
                            Sign Up.
                        </Text>

                        <Text className="text-neutral-500 text-sm font-medium">
                            Register to join!
                        </Text>
                    </Animated.View>

                    {/*Email and Password Text Input*/}
                    <Animated.View
                    className="py-s space-y-8"
                    entering={FadeInDown.duration(100).delay(200).springify()}
                    >
                        {/* Email */}
                        <View className="border-2 border-gray-400 rounded-lg">
                            <TextInput 
                            className="p-4"
                            onChangeText={(text) => setEmail(text)} 
                            value={email}
                            placeholder="Email"
                            autoCapitalize="none"
                            />
                        </View>


                        {/*Password */}
                        <View className="border-2 border-gray-400 rounded-lg">
                            <TextInput 
                            className="p-4"
                            onChangeText={(text) => setPassword(text)} 
                            value={password }
                            placeholder="Password"
                            autoCapitalize="none"
                            />
                        </View>



                    </Animated.View>

                    {/* Login Buuton */}

                    <Animated.View 
                    className="w-full justify-start"
                    entering={FadeInDown.duration(100).delay(300).springify()}
                    >
                        <View className="pb-6">
                            <Button title={"Login"} />

                        </View>

                    </Animated.View>

                    {/*Breaker Line */}
                    <View>
                        <Breaker/>
                    </View>

                    {/*3rd Party Auth */}
                    <View className="w-full justify-normal">
                        <Animated.View
                            entering={FadeInDown.duration(100).delay(600).springify()}
                            className="pb-4"
                        >
                            <ButtonOutline title="Continue with Google">
                                <AntDesign name="google" size={20} color="gray" />
                            </ButtonOutline>


                        </Animated.View>

                    
                    </View>

                    {/* Have an account */}
                    <Animated.View
                    className="flex-row justify-center items-center"
                    entering={FadeInDown.duration(100).delay(700).springify()}
                    >
                        <Text className="text-neutral-500 text-lg font-meduim leading-[38px] text-center"
                        style={{
                            fontFamily: "PlusJarkartaSansMeduim",
                        }}
                        > Have an account?{" "} 
                        </Text >

                        <Pressable onPress={() => navigateAuth("Login")}>
                            <Text className="text-neutral-800 text-lg font-meduim leading-[38px] text-center" style={{
                                fontFamily: "PlusJarkartaSansBold",
                                }}> Login {" "}
                            </Text>
                        </Pressable>
                    </Animated.View>


                </View>
            </View>
        </View>
    );
};

export default RegisterScreen;