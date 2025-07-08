import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const FinalConfirmationScreen = () => {
  const router = useRouter();

  const handleNext = () => {
    // Navigate to the main app/course list screen
    console.log('Navigating to home screen...');
    router.replace('/login'); 
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-10">
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()} className="mb-8">
          <View className="border border-gray-300 rounded-lg px-3 py-1 flex-row items-center self-start">
            <Text className="text-lg mr-1 mb-2">←</Text>
            <Text className="text-base">Back</Text>
          </View>
        </TouchableOpacity>

        <View className="items-center justify-center flex-1">
          {/* Success Message */}
          <Text className="text-2xl font-bold text-gray-800 text-center mb-8">
            Your account is made !
          </Text>

          {/* Checkmark Icon */}
          <View className="w-28 h-28 bg-green-600 rounded-full items-center justify-center mb-4">
            <Text className="text-white text-6xl">✓</Text>
          </View>

          {/* Description */}
          <Text className="text-base text-gray-600 text-center mb-16">
            You've successfully made an account,{"\n"}click next to view courses
          </Text>

          {/* Next Button */}
          <TouchableOpacity 
            className="w-full h-12 bg-green-700 rounded-xl justify-center items-center"
            onPress={handleNext}
          >
            <Text className="text-white text-lg font-semibold">Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default FinalConfirmationScreen;

