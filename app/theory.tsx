import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TheorySection from '../components/TheorySection';

const TheoryPage = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-white px-4 flex-row justify-between items-center" style={{ paddingTop: insets.top + 12, paddingBottom: 12 }}>
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <View className="w-10 h-10 rounded-full border border-gray-300 items-center justify-center">
            <Text className="text-xl">←</Text>
          </View>
        </TouchableOpacity>
        
        <View className="flex-1 mx-4">
          <Text className="text-center text-lg font-semibold">
            Introduction
          </Text>
          <Text className="text-center text-gray-600 text-sm">Regenerative Farming</Text>
        </View>
        
        <TouchableOpacity className="p-2">
          <Text className="text-base">Share</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <TheorySection />
      </ScrollView>

      {/* Next Button */}
      <View className="p-4">
        <TouchableOpacity 
          onPress={() => router.push('/maps')} 
          className="bg-green-600 rounded-lg py-4"
        >
          <Text className="text-white text-center font-semibold text-lg">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TheoryPage;
