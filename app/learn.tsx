import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { CircleArrowLeft, Check, HelpCircle } from 'lucide-react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';

interface SubtopicItemProps {
  title: string;
  isSelected: boolean;
  onPress: () => void;
  orderNumber?: number;
}

const SubtopicItem = ({ title, isSelected, onPress, orderNumber }: SubtopicItemProps) => {
  return (
    <TouchableOpacity 
      className={`flex-row items-center p-4 mb-3 rounded-xl ${isSelected ? 'bg-green-100' : 'bg-white'}`}
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        borderWidth: 1,
        borderColor: isSelected ? '#16a34a' : '#f3f4f6',
        borderBottomWidth: 3,
        borderRightWidth: 2,
        borderBottomColor: isSelected ? '#14532d' : '#e5e7eb',
        borderRightColor: isSelected ? '#15803d' : '#e5e7eb',
      }}
    >
      <View className={`w-8 h-8 rounded-full items-center justify-center mr-3 ${isSelected ? 'bg-green-600' : 'bg-gray-200'}`}>
        {isSelected && orderNumber ? (
          <Text className="text-white font-bold">{orderNumber}</Text>
        ) : (
          <View className="w-4 h-4 rounded-full bg-gray-400" />
        )}
      </View>
      <Text className={`flex-1 text-base ${isSelected ? 'text-green-800 font-semibold' : 'text-gray-700'}`}>
        {title}
      </Text>
      {isSelected && (
        <Check size={20} color="#16a34a" />
      )}
    </TouchableOpacity>
  );
};

export default function LearnScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [selectedSubtopics, setSelectedSubtopics] = useState<string[]>([]);
  const [infoVisible, setInfoVisible] = useState(false);

  // Define subtopics for each main topic
  const subtopicsByTopic: { [key: string]: string[] } = {
    'Farming': [
      'Crop Selection and Planning',
      'Soil Preparation Techniques',
      'Irrigation and Water Management',
      'Pest and Disease Control',
      'Harvesting and Storage'
    ],
    'Basic Finance': [
      'Budgeting and Saving',
      'Understanding Interest Rates',
      'Mobile Banking',
      'Investment Basics',
      'Financial Record Keeping'
    ],
    'Live Stock': [
      'Animal Health and Vaccination',
      'Feeding and Nutrition',
      'Breeding Management',
      'Housing and Shelter',
      'Disease Prevention'
    ],
    'Pest Control': [
      'Identifying Common Pests',
      'Natural Pest Control Methods',
      'Safe Use of Pesticides',
      'Integrated Pest Management',
      'Crop Rotation Benefits'
    ],
    'Nutrition/Diet': [
      'Balanced Diet Planning',
      'Local Food Resources',
      'Child Nutrition',
      'Food Preservation',
      'Kitchen Gardening'
    ],
    'Family planning': [
      'Family Planning Methods',
      'Maternal Health',
      'Child Spacing Benefits',
      'Reproductive Health',
      'Community Resources'
    ]
  };

  // Get selected topics from navigation params
  const selectedTopics = params.topics 
    ? JSON.parse(decodeURIComponent(params.topics as string)) 
    : ['Farming', 'Basic Finance']; // Fallback for development

  const handleSubtopicPress = (subtopic: string) => {
    setSelectedSubtopics(prevState => {
      if (prevState.includes(subtopic)) {
        return prevState.filter(item => item !== subtopic);
      } else {
        return [...prevState, subtopic];
      }
    });
  };

  const getOrderNumber = (subtopic: string) => {
    const index = selectedSubtopics.indexOf(subtopic);
    return index !== -1 ? index + 1 : undefined;
  };

  const handleNext = () => {
    console.log('Selected subtopics:', selectedSubtopics);
    // Navigate to next screen
  };

  return (
    <View className="flex-1 bg-[#F1E6D4]">
      <ScrollView className="flex-1">
        <View className="px-6 pt-12 pb-6">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-6">
            <TouchableOpacity onPress={() => router.push('/courses')} activeOpacity={0.7}>
              <CircleArrowLeft size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setInfoVisible(true)} activeOpacity={0.7}>
              <View className="w-10 h-10 rounded-full items-center justify-center">
                <HelpCircle size={25} color="black" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Title */}
          <View className="mb-6">
            <Text className="text-3xl font-bold text-gray-800 mb-2">What do you want to learn?</Text>
            <Text className="text-gray-600">Select topics in the order you want to learn them</Text>
          </View>

          {/* Subtopics by Topic */}
          {selectedTopics.map((topic) => (
            <View key={topic} className="mb-6">
              <Text className="text-xl font-semibold text-gray-800 mb-3">{topic}</Text>
              {subtopicsByTopic[topic]?.map((subtopic) => (
                <SubtopicItem
                  key={subtopic}
                  title={subtopic}
                  isSelected={selectedSubtopics.includes(subtopic)}
                  onPress={() => handleSubtopicPress(subtopic)}
                  orderNumber={getOrderNumber(subtopic)}
                />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      
      {/* Next Button */}
      <View className="px-6 pb-10 pt-2 ">
      <TouchableOpacity 
        className={`py-4 rounded-full ${selectedSubtopics.length > 0 ? 'bg-[#00522A]' : 'bg-gray-400'}`}
        onPress={handleNext}
        activeOpacity={selectedSubtopics.length > 0 ? 0.8 : 1}
        disabled={selectedSubtopics.length === 0}
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 5.84,
          elevation: 8,
          borderWidth: 1,
          borderBottomWidth: 3,
          borderRightWidth: 2,
          borderColor: selectedSubtopics.length > 0 ? '#00451F' : '#d1d5db',
          borderBottomColor: selectedSubtopics.length > 0 ? '#002e14' : '#d1d5db',
          borderRightColor: selectedSubtopics.length > 0 ? '#002e14' : '#d1d5db',
        }}
        >
          <Text className="text-white text-center font-bold text-lg">
            {selectedSubtopics.length > 0 
              ? `Start Learning (${selectedSubtopics.length} selected)`
              : 'Select at least one topic'
            }
          </Text>
        </TouchableOpacity>
      </View>
      {/* Info Modal */}
      <Modal
        visible={infoVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setInfoVisible(false)}
      >
        <View className="flex-1 bg-black/40 items-center justify-center px-8">
          <View className="bg-white rounded-2xl p-6 w-full max-w-md">
            <Text className="text-xl font-bold mb-4 text-center">How to use this page</Text>
            <Text className="text-gray-700 mb-6">
              Select the subtopics in the order you wish to learn them. Tap a subtopic again to remove it from your
              selection. When you’re ready, press “Start Learning”.
            </Text>
            <TouchableOpacity
              className="bg-[#00522A] py-3 rounded-full"
              onPress={() => setInfoVisible(false)}
              activeOpacity={0.8}
            >
              <Text className="text-white text-center font-semibold">Got it</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
