import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { 
  TreePine, 
  DollarSign, 
  CircleDollarSign,
  Heart,
  Bug, 
  Apple, 
  Users 
} from 'lucide-react-native';

const TopicCard = ({ icon: Icon, title, onPress }) => {
  return (
    <TouchableOpacity 
      className="bg-white rounded-2xl p-6 shadow-sm flex-1 items-center justify-center" 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View className="mb-3">
        <Icon size={32} color="#16a34a" />
      </View>
      <Text className="text-base font-semibold text-gray-800 text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const router = useRouter();
  
  const handleTopicPress = (topicName: string) => {
    // Navigate to courses page when a topic is pressed
    router.push('/courses');
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        <Text className="text-3xl font-bold text-gray-800 mb-2">Welcome!</Text>
        <Text className="text-gray-600 mb-8">This is your home screen</Text>

        <Text className="text-xl font-semibold text-gray-800 mb-4">Topics</Text>
        <View className="flex-row flex-wrap -mx-2">
          <View className="w-1/2 px-2 mb-4">
            <TopicCard 
              icon={TreePine} 
              title="Farming" 
              onPress={() => handleTopicPress('Farming')}
            />
          </View>
          <View className="w-1/2 px-2 mb-4">
            <TopicCard 
              icon={CircleDollarSign} 
              title="Basic Finance" 
              onPress={() => handleTopicPress('Basic Finance')}
            />
          </View>
          <View className="w-1/2 px-2 mb-4">
            <TopicCard 
              icon={Heart} 
              title="Live Stock" 
              onPress={() => handleTopicPress('Live Stock')}
            />
          </View>
          <View className="w-1/2 px-2 mb-4">
            <TopicCard 
              icon={Bug} 
              title="Pest Control" 
              onPress={() => handleTopicPress('Pest Control')}
            />
          </View>
          <View className="w-1/2 px-2 mb-4">
            <TopicCard 
              icon={Apple} 
              title="Nutrition/Diet" 
              onPress={() => handleTopicPress('Nutrition/Diet')}
            />
          </View>
          <View className="w-1/2 px-2 mb-4">
            <TopicCard 
              icon={Users} 
              title="Family Planning" 
              onPress={() => handleTopicPress('Family Planning')}
            />
          </View>
        </View>

        <View className="mt-6 space-y-3">
          <Link href="/login" asChild>
            <TouchableOpacity className="bg-green-600 rounded-2xl p-4">
              <Text className="text-white font-semibold text-center text-lg">Go to Login</Text>
            </TouchableOpacity>
          </Link>
          
          <View className="flex-row space-x-3">
            <Link href="/profile" asChild>
              <TouchableOpacity className="bg-gray-200 rounded-2xl p-4 flex-1">
                <Text className="text-gray-800 font-semibold text-center">Profile</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href="/settings" asChild>
              <TouchableOpacity className="bg-gray-200 rounded-2xl p-4 flex-1">
                <Text className="text-gray-800 font-semibold text-center">Settings</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
