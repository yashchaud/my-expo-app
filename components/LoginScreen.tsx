import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!mobileNumber) {
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-blue-50"
    >
      <StatusBar style="dark" />
      <ScrollView 
        className="flex-1" 
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section with Illustration */}
        <View className="flex-1 justify-center items-center px-6 pt-12">
          {/* Illustration Placeholder */}
          <View className="w-80 h-64 bg-white rounded-3xl shadow-lg mb-8 justify-center items-center">
            <View className="w-64 h-48 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-2xl justify-center items-center">
              {/* Simple illustration with NativeWind */}
              <View className="flex-row space-x-4">
                <View className="w-12 h-12 bg-orange-500 rounded-full opacity-80" />
                <View className="w-8 h-8 bg-yellow-500 rounded-full mt-2 opacity-70" />
              </View>
              <View className="w-32 h-2 bg-green-400 rounded-full mt-4 opacity-60" />
              <View className="w-24 h-2 bg-blue-400 rounded-full mt-2 opacity-50" />
            </View>
          </View>
        </View>

        {/* Login Form Section */}
        <View className="bg-white rounded-t-3xl px-6 py-8 shadow-2xl">
          <Text className="text-3xl font-bold text-gray-800 text-center mb-8">Login</Text>
          
          {/* Mobile Number Input */}
          <View className="mb-6">
            <Text className="text-gray-600 text-sm font-medium mb-2 ml-1">Mobile Number</Text>
            <View className="relative">
              <TextInput
                className="w-full h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 text-gray-800 text-base focus:border-green-500 focus:bg-white"
                placeholder="Enter your mobile number"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
                maxLength={10}
              />
              <View className="absolute right-4 top-4">
                <View className="w-6 h-6 bg-green-100 rounded-full justify-center items-center">
                  <Text className="text-green-600 text-xs font-bold">📱</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity 
            className={`w-full h-14 rounded-xl justify-center items-center mb-6 shadow-lg ${
              isLoading ? 'bg-gray-400' : 'bg-green-600 active:bg-green-700'
            }`}
            onPress={handleLogin}
            disabled={isLoading || !mobileNumber}
          >
            <Text className="text-white text-lg font-bold tracking-wide">
              {isLoading ? 'LOGGING IN...' : 'LOGIN'}
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-4 text-gray-500 text-sm">or</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Social Login Options */}
          <View className="flex-row justify-center space-x-4 mb-8">
            <TouchableOpacity className="w-12 h-12 bg-blue-600 rounded-full justify-center items-center">
              <Text className="text-white font-bold">f</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-12 h-12 bg-red-500 rounded-full justify-center items-center">
              <Text className="text-white font-bold">G</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-12 h-12 bg-gray-800 rounded-full justify-center items-center">
              <Text className="text-white font-bold">@</Text>
            </TouchableOpacity>
          </View>

          {/* Create Account Link */}
          <View className="items-center">
            <Text className="text-gray-600 text-base mb-2">Don't have an account?</Text>
            <TouchableOpacity className="py-2 px-4">
              <Text className="text-green-600 text-base font-semibold underline">
                Create New Account Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

