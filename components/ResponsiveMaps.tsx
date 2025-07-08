import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MapPin } from 'lucide-react-native';

const ResponsiveMaps = () => {
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [selectedDistrict, setSelectedDistrict] = useState('Latur');

  return (
    <View className="bg-gray-50 p-4">
      {/* Header */}
      <Text className="text-2xl font-bold mb-4">Responsive Maps.</Text>

      {/* Share Location Button */}
      <TouchableOpacity className="bg-green-600 rounded-lg p-4 flex-row items-center justify-center mb-4">
        <MapPin size={20} color="white" />
        <Text className="text-white font-medium ml-2">Share Current Location</Text>
      </TouchableOpacity>

      <Text className="text-center text-gray-500 mb-4">OR</Text>

      {/* Location Selectors */}
      <View className="flex-row gap-4 mb-6">
        <View className="flex-1">
          <Text className="text-sm text-gray-600 mb-2">Select State</Text>
          <TouchableOpacity className="bg-white border border-gray-300 rounded-lg p-3">
            <Text className="text-gray-700">{selectedState}</Text>
          </TouchableOpacity>
        </View>
        
        <View className="flex-1">
          <Text className="text-sm text-gray-600 mb-2">District</Text>
          <TouchableOpacity className="bg-white border border-gray-300 rounded-lg p-3">
            <Text className="text-gray-700">{selectedDistrict}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Map Image */}
      <View className="bg-white rounded-lg overflow-hidden mb-6">
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Maharashtra_district_location_map_Latur.svg/800px-Maharashtra_district_location_map_Latur.svg.png'
          }}
          className="w-full h-64"
          resizeMode="contain"
        />
      </View>

      {/* Information Text */}
      <Text className="text-gray-700 mb-6">
        In Latur, a drought-prone area in Maharashtra, farmers are increasingly adopting regenerative farming practices, including rain-water farming, afforestation, and climate-resilient techniques to improve soil health, water availability, and crop yields.
      </Text>

      {/* Challenges and Context Section */}
      <View className="mb-6">
        <Text className="text-lg font-semibold mb-3">Challenges and Context:</Text>
        
        <View className="space-y-3">
          {/* Drought-Prone Area */}
          <View>
            <Text className="font-medium text-gray-800">-Drought-Prone Area</Text>
            <Text className="text-gray-600 ml-2">
              • Latur has historically faced challenges with erratic rainfall, groundwater depletion,
            </Text>
            <Text className="text-gray-600 ml-2">
              • The area has seen farmers struggle with water scarcity, degraded soils, and unstable crop practices.
            </Text>
          </View>

          {/* Need for Change */}
          <View>
            <Text className="font-medium text-gray-800 mt-3">-Need for Change:</Text>
            <Text className="text-gray-600 ml-2">
              • Farmers are gradually transitioning to natural farming methods, afforestation, water harvesting, and soil regeneration practices.
            </Text>
          </View>

          {/* Moving Towards Sustainability */}
          <View>
            <Text className="font-medium text-gray-800 mt-3">-Moving Towards Sustainability:</Text>
            <Text className="text-gray-600 ml-2">
              • Farmers are gradually transitioning to natural farming methods, afforestation, water harvesting, and soil regeneration practices.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ResponsiveMaps;
