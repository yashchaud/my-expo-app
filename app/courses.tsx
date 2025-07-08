import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { CircleArrowLeft, HelpCircle, Tractor, Landmark, Beef, Bug, Carrot, Users } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import React from 'react';

interface TopicCardProps {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
  color: string;
}

const TopicCard = ({ icon, title, onPress, color }: TopicCardProps) => {
  return (
    <TouchableOpacity 
      className="bg-white rounded-2xl items-center justify-center w-[48%] mb-4 py-6"
      onPress={onPress}
      activeOpacity={0.7}
    >
      {icon}
      <Text className="text-base font-semibold text-center mt-3" style={{ color }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function CoursesScreen() {
  const router = useRouter();

  const topics = [
    { id: 1, title: 'Farming', icon: <Tractor size={40} color="#16a34a" />, color: '#16a34a' },
    { id: 2, title: 'Basic Finance', icon: <Landmark size={40} color="#0a54a8" />, color: '#0a54a8' },
    { id: 3, title: 'Live Stock', icon: <Beef size={40} color="#4f7a9e" />, color: '#4f7a9e' },
    { id: 4, title: 'Pest Control', icon: <Bug size={40} color="#b45309" />, color: '#b45309' },
    { id: 5, title: 'Nutrition/Diet', icon: <Carrot size={40} color="#f97316" />, color: '#f97316' },
    { id: 6, title: 'Family planning', icon: <Users size={40} color="#831843" />, color: '#831843' },
  ];

  const handleTopicPress = (topic) => {
    console.log(`Selected topic: ${topic.title}`);
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
            <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
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
                onPress={() => handleTopicPress(topic)}
              />
            ))}
          </View>
          
          {/* View More Link */}
          <TouchableOpacity 
            className="py-2 mt-4" 
            onPress={() => console.log('View More pressed')}
            activeOpacity={0.7}
          >
            <Text className="text-gray-900 text-center font-semibold text-base underline">
              View More
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      {/* Next Button */}
      <View className="px-6 pb-10 pt-2 bg-[#fdfaf4]">
        <TouchableOpacity 
          className="bg-[#00522A] py-4 rounded-full"
          onPress={() => console.log('Next pressed')}
          activeOpacity={0.8}
        >
          <Text className="text-white text-center font-bold text-lg">
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
