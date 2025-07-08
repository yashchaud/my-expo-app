import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const LoginScreen = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Illustration Section */}
      <View className="h-96 bg-yellow-100 justify-center items-center">
        {/* Grid of illustrations matching the design */}
        <View className="w-80 h-72 flex-row flex-wrap justify-between">
          {/* Top row */}
          <View className="w-36 h-32 bg-yellow-200 rounded-2xl mb-2 justify-center items-center">
            <View className="w-12 h-12 bg-orange-600 rounded-lg" />
            <View className="w-8 h-8 bg-orange-400 rounded-lg mt-2" />
          </View>
          <View className="w-36 h-32 bg-orange-200 rounded-2xl mb-2 justify-center items-center">
            <View className="w-10 h-10 bg-red-500 rounded-lg" />
            <View className="w-6 h-6 bg-red-300 rounded-lg mt-2" />
          </View>
          
          {/* Bottom row */}
          <View className="w-36 h-32 bg-green-200 rounded-2xl justify-center items-center">
            <View className="w-8 h-8 bg-green-600 rounded-lg" />
            <View className="w-12 h-6 bg-green-400 rounded-lg mt-2" />
          </View>
          <View className="w-36 h-32 bg-blue-200 rounded-2xl justify-center items-center">
            <View className="w-10 h-8 bg-blue-600 rounded-lg" />
            <View className="w-6 h-6 bg-blue-400 rounded-lg mt-2" />
          </View>
        </View>
      </View>

      {/* Login Form Section */}
      <View className="bg-white px-8 py-12 -mt-8">
        <Text className="text-4xl font-bold text-gray-800 text-center mb-12">Login</Text>
        
        {/* Mobile Number Input */}
        <TextInput
          className="w-full h-12 border border-gray-300 rounded-lg px-4 text-base mb-8"
          placeholder="Mobile number"
          keyboardType="phone-pad"
        />

        {/* Login Button */}
        <TouchableOpacity className="w-full h-14 bg-green-600 rounded-lg justify-center items-center mb-8">
          <Text className="text-white text-lg font-bold">LOGIN</Text>
        </TouchableOpacity>

        {/* Create Account Link */}
        <View className="items-center">
          <Text className="text-gray-600 text-base mb-2">You do not have account ?</Text>
          <TouchableOpacity>
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

