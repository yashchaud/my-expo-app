import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import image1 from "../components/images/image 231.png"
import image2 from "../components/images/image 232.png"
import image3 from "../components/images/image 233.png"
import image4 from "../components/images/image 234.png"

const LoginScreen = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Navigate to language selection when logging in
    router.push('/selectLanguage');
  };

  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Illustration Section */}
      <View className=" bg-yellow-100 justify-center ">
        {/* Grid of images matching the design - 2x2 grid */}
        <View className="w-80">
          <View className="flex-row justify-between ">
            <Image 
              source={image1} 
              className="w-[100px] h-[100px]" 
              resizeMode="cover"
            />
            <Image 
              source={image2} 
              className="w-[100px] h-[100px]" 
              resizeMode="cover"
            />
          </View>
          <View className="flex-row justify-between w-full ">
            <Image 
              source={image3} 
              className="min-w-[150px] h-[100px]" 
              resizeMode="cover"
            />
            <Image 
              source={image4} 
              className="min-w-[150px] h-[100px]" 
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      {/* Login Form Section */}
      <View className="bg-white px-8 py-12 ">
        <Text className="text-4xl font-bold text-gray-800 text-center mb-12">Login</Text>
        
        {/* Mobile Number Input */}
        <TextInput
          className="w-full h-12 border border-gray-300 rounded-lg px-4 text-base mb-8"
          placeholder="Mobile number"
          keyboardType="phone-pad"
        />

        {/* Login Button */}
        <TouchableOpacity 
          className="w-full h-14 bg-green-600 rounded-lg justify-center items-center mb-8"
          onPress={handleLogin}
        >
          <Text className="text-white text-lg font-bold">LOGIN</Text>
        </TouchableOpacity>

        {/* Create Account Link */}
        <View className="items-center">
          <Text className="text-gray-600 text-base mb-2">You do not have account ?</Text>
          <TouchableOpacity onPress={() => router.push('/signup')}>
            <Text className="text-green-600 text-base font-medium underline">
              Create New Account Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

