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
  

  
      {/* Map Image */}
      <View className="bg-white rounded-lg overflow-hidden mb-6">
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1592397950338-54b726597959?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }}
          className="w-full h-64"
          resizeMode="cover"
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
