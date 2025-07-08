import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

const AccountSuccessScreen = () => {
  const router = useRouter();

  const handleAllowAccess = () => {
    // Handle location permission request here
    console.log('Location permission requested');
    // Navigate to final confirmation screen
    router.push('/finalConfirmation');
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

        {/* Success Message */}
        <Text className="text-xl font-bold text-gray-800 text-center mb-12">
          Your account is made !
        </Text>

        {/* Illustration */}
        <View className="items-center mb-8">
          <View className="w-52 h-52 items-center justify-center">
            {/* Placeholder illustration - replace with actual image */}
            <View className="relative">
              {/* Phone frame */}
              <View className="w-32 h-56 border-4 border-gray-800 rounded-2xl bg-white">
                {/* Map inside phone */}
                <View className="flex-1 bg-green-50 rounded-xl m-1">
                  {/* Location pin */}
                  <View className="absolute top-8 left-12">
                    <Text className="text-4xl">📍</Text>
                  </View>
                </View>
              </View>
              
              {/* Person illustration */}
              <View className="absolute -right-16 top-20">
                <Text className="text-6xl">🧑‍🌾</Text>
              </View>
              
              {/* Plant decoration */}
              <View className="absolute -left-8 bottom-0">
                <Text className="text-3xl">🌿</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Description */}
        <Text className="text-sm text-gray-600 text-center mb-12 px-4">
          Enable precise access to see{"\n"}
          videos relavant to you district/{"\n"}
          taluk/village/town/city
        </Text>

        {/* Allow Access Button */}
        <TouchableOpacity 
          className="w-full h-12 bg-green-700 rounded-xl justify-center items-center"
          onPress={handleAllowAccess}
        >
          <Text className="text-white text-lg font-semibold">Allow Access</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AccountSuccessScreen;
