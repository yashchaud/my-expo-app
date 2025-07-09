import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
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
    <ScrollView className="flex-1 bg-gray-100" contentContainerStyle={{ flexGrow: 1 }}>
      {/* Illustration Section */}
      <View className="bg-yellow-100">
        {/* Grid of images matching the design - 2x2 grid */}
        <View className="w-full">
          <View className="flex-row h-40">
            <View className="flex-1">
              <Image 
                source={image1} 
                className="min-w-full h-full" 
                resizeMode="stretch"
              />
            </View>
            <View className="flex-1">
              <Image 
                source={image2} 
                className="min-w-full h-full" 
                resizeMode="stretch"
              />
            </View>
          </View>
          <View className="flex-row h-40">
            <View className="flex-1">
              <Image 
                source={image3} 
                className="min-w-full h-full" 
                resizeMode="stretch"
              />
            </View>
            <View className="flex-1">
              <Image 
                source={image4} 
                className="min-w-full h-full" 
                resizeMode="stretch"
              />
            </View>
          </View>
        </View>
      </View>

      {/* Login Form Section */}
      <View className="flex-1 bg-white px-6 py-8">
        <Text className="text-3xl font-bold text-gray-800 text-center mb-8">Login</Text>
        
        {/* Mobile Number Input */}
        <TextInput
          className="w-full h-12 border border-gray-300 rounded-lg px-4 text-base mb-6"
          placeholder="Mobile number"
          keyboardType="phone-pad"
        />

        {/* Login Button */}
        <TouchableOpacity 
          className="w-full h-12 bg-green-600 rounded-lg justify-center items-center mb-6"
          onPress={handleLogin}
        >
          <Text className="text-white text-base font-semibold">LOGIN</Text>
        </TouchableOpacity>

        {/* Create Account Link */}
        <View className="items-center">
          <Text className="text-gray-600 text-sm mb-2">You do not have account ?</Text>
          <TouchableOpacity onPress={() => router.push('/signup')}>
            <Text className="text-green-600 text-sm font-medium underline">
              Create New Account Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

