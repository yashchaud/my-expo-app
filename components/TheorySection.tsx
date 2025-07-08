import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Bookmark, Share2 } from 'lucide-react-native';

const TheorySection = () => {
  return (
    <View className="bg-white p-4">
      {/* Theory Header */}
      <Text className="text-2xl font-bold mb-2">Theory</Text>
      <Text className="text-gray-700 mb-6">
        Regenerative farming is a holistic approach to agriculture that aims to improve soil health, enhance biodiversity
      </Text>

      {/* Soil Types Card */}
      <View className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        {/* Card Header */}
        <View className="flex-row items-center p-4 border-b border-gray-100">
          <View className="bg-blue-50 p-2 rounded">
            <Text className="text-blue-500 text-lg">📘</Text>
          </View>
          <Text className="ml-3 text-lg font-semibold flex-1">Soil Types in your region</Text>
        </View>

        {/* Card Image */}
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1482101/pexels-photo-1482101.jpeg?auto=compress&cs=tinysrgb&w=400'
          }}
          className="w-full h-48"
          resizeMode="cover"
        />

        {/* Card Content */}
        <View className="p-4">
          <Text className="text-gray-700 mb-4">
            Regenerative farming is a holistic approach to agriculture that aims to improve soil health, enhance biodiversity
          </Text>

          <Text className="text-gray-700 mb-4">
            In the context of India, <Text className="underline">sustainable</Text> farming means regenerative agricultural practices that meet current food needs without compromising the ability of future generations to meet their own, while also preserving the environment and natural resources.
          </Text>

          {/* Action Buttons */}
          <View className="flex-row items-center justify-between mt-4">
            <View className="flex-row items-center">
              <TouchableOpacity className="mr-4">
                <Bookmark size={20} color="#6B7280" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Share2 size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>
            <Text className="text-sm text-gray-500">Save · Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TheorySection;
