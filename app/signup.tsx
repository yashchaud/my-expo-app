import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

const SignupScreen = () => {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState('');

  const handleCreateAccount = () => {
    if (mobileNumber.trim()) {
      router.push('/otpVerification');
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-20">
        {/* Logo Section */}
        <View className="items-center mb-5">
          <View className="w-32 h-32 bg-yellow-50 rounded-full items-center justify-center border-4 border-yellow-600">
            {/* Placeholder for logo - you can replace with actual logo */}
            <Text className="text-4xl">🌾</Text>
            <Text className="text-sm font-bold text-yellow-800 mt-1">समृद्ध सेतु</Text>
          </View>
        </View>

        {/* Title */}
        <Text className="text-2xl font-bold text-green-700 text-center mb-8">
          Sign Up to get started
        </Text>

        {/* Form Section */}
        <View className="bg-white">
          <Text className="text-xl font-bold text-gray-800 text-center mb-2">
            Sign Up to get started
          </Text>
          
          <Text className="text-sm text-gray-600 text-center mb-8">
            Please enter your mobile number{'\n'}to create account
          </Text>

          {/* Mobile Number Input */}
          <TextInput
            className="w-full h-12 border border-gray-300 rounded-xl px-4 text-base mb-6"
            placeholder="Mobile number"
            keyboardType="phone-pad"
            placeholderTextColor="#9CA3AF"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />

          {/* Create Account Button */}
          <TouchableOpacity 
            className="w-full h-12 bg-green-800 rounded-xl justify-center items-center"
            onPress={handleCreateAccount}
          >
            <Text className="text-white text-lg font-semibold">Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
