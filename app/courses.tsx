import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { CircleArrowLeft, HelpCircle, Tractor, Landmark, Beef, Bug, Carrot, Users, Check } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

interface TopicCardProps {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
  color: string;
  isSelected: boolean;
}

const TopicCard = ({ icon, title, onPress, color, isSelected }: TopicCardProps) => {
  return (
    <TouchableOpacity 
      className={`rounded-2xl items-center justify-center w-[48%] mb-4 py-6 ${isSelected ? 'bg-green-100' : 'bg-white'}`}
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 8, // for Android
        // Additional styling for more 3D effect
        borderWidth: 1,
        borderColor: isSelected ? '#16a34a' : '#e5e7eb',
        borderBottomWidth: 3,
        borderRightWidth: 2,
        borderBottomColor: isSelected ? '#14532d' : '#d1d5db',
        borderRightColor: isSelected ? '#14532d' : '#d1d5db',
      }}
    >
      {/* Selection indicator */}
      {isSelected && (
        <View className="absolute top-2 right-2 bg-green-600 rounded-full p-1">
          <Check size={16} color="white" />
        </View>
      )}
      {icon}
      <Text className="text-base font-semibold text-center mt-3" style={{ color }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function CoursesScreen() {
  const router = useRouter();
  const [selectedTopics, setSelectedTopics] = useState<number[]>([]);
  const [infoVisible, setInfoVisible] = useState(false);
  const isDisabled = selectedTopics.length === 0;

  const topics = [
    { id: 1, title: 'Farming', icon: <Tractor size={40} color="#16a34a" />, color: '#16a34a' },
    { id: 2, title: 'Basic Finance', icon: <Landmark size={40} color="#0a54a8" />, color: '#0a54a8' },
    { id: 3, title: 'Live Stock', icon: <Beef size={40} color="#4f7a9e" />, color: '#4f7a9e' },
    { id: 4, title: 'Pest Control', icon: <Bug size={40} color="#b45309" />, color: '#b45309' },
    { id: 5, title: 'Nutrition/Diet', icon: <Carrot size={40} color="#f97316" />, color: '#f97316' },
    { id: 6, title: 'Family planning', icon: <Users size={40} color="#831843" />, color: '#831843' },
  ];

  const handleTopicPress = (topicId: number) => {
    setSelectedTopics(prevState => {
      if (prevState.includes(topicId)) {
        return prevState.filter(id => id !== topicId);
      } else {
        return [...prevState, topicId];
      }
    });
  };

  return (
    <View className="flex-1 bg-[#F1E6D4]">
      <ScrollView className="flex-1">
        <View className="px-6 pt-12 pb-6 ">
          {/* Header */}
          <View className="flex-row justify-between items-center ">
            <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
              <CircleArrowLeft size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setInfoVisible(true)} activeOpacity={0.7}>
              <View className="w-10 h-10 rounded-full items-center justify-center">
                <HelpCircle size={22} color="black" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Title */}
          <View className="mt-6 mb-8">
            <Text className="text-3xl font-bold text-gray-800 text-center">What topics are you interested in?</Text>
          </View>

          {/* Topics Grid */}
          <View className="flex-row flex-wrap justify-between">
            {topics.map((topic) => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                icon={topic.icon}
                color={topic.color}
                isSelected={selectedTopics.includes(topic.id)}
                onPress={() => handleTopicPress(topic.id)}
              />
            ))}
          </View>
          
          {/* View More Link */}
          <TouchableOpacity 
            className="py-2 mt-4" 
            onPress={() => console.log('View More pressed')}
            activeOpacity={0.7}
          >
            <Text className="text-gray-900 text-center font-bold text-base underline">
              View More
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
   
      
        {/* Action Button */}
        <TouchableOpacity
          className={`py-4 rounded-full mx-6 mb-11 ${isDisabled ? 'bg-gray-300' : 'bg-[#00522A]'}`}
          onPress={() => {
            if (!isDisabled) {
              const selectedTopicNames = topics
                .filter(topic => selectedTopics.includes(topic.id))
                .map(topic => topic.title);
              router.push(`/learn?topics=${encodeURIComponent(JSON.stringify(selectedTopicNames))}`);
            }
          }}
          activeOpacity={!isDisabled ? 0.8 : 1}
          disabled={isDisabled}
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 5.84,
            elevation: 8,
            borderWidth: 1,
            borderBottomWidth: 3,
            borderRightWidth: 2,
            borderColor: isDisabled ? '#d1d5db' : '#00451F',
            borderBottomColor: isDisabled ? '#d1d5db' : '#002e14',
            borderRightColor: isDisabled ? '#d1d5db' : '#002e14',
          }}
        >
          <Text className="text-white text-center font-bold text-lg">
            {selectedTopics.length > 0 
              ? `Next (${selectedTopics.length} topic${selectedTopics.length > 1 ? 's' : ''} selected)`
              : 'Select at least one topic'
            }
          </Text>
        </TouchableOpacity>
       
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
              Select the topics you are interested in learning. You can choose multiple topics. 
              Each topic contains 5 subtopics that you'll be able to explore in the next step. 
              Once you've selected at least one topic, tap "Next" to continue.
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
