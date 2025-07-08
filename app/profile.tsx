import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  
  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <ChevronLeft size={24} color="#374151" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-gray-800">Profile</Text>
        </View>
      </View>
      
      <ScrollView className="flex-1">
        <View className="p-6">
          <View className="items-center mb-8">
          <View className="w-24 h-24 bg-gray-300 rounded-full mb-4" />
          <Text className="text-2xl font-bold text-gray-800">John Doe</Text>
          <Text className="text-gray-600">john.doe@example.com</Text>
        </View>
        
        <View className="bg-white rounded-2xl p-6 shadow-sm">
          <Text className="text-xl font-semibold text-gray-800 mb-4">Profile Information</Text>
          
          <View className="mb-4">
            <Text className="text-gray-500 text-sm mb-1">Phone Number</Text>
            <Text className="text-gray-800">+1 234 567 8900</Text>
          </View>
          
          <View className="mb-4">
            <Text className="text-gray-500 text-sm mb-1">Address</Text>
            <Text className="text-gray-800">123 Main St, City, State</Text>
          </View>
          
          <TouchableOpacity className="bg-green-600 rounded-lg p-4 mt-4">
            <Text className="text-white font-semibold text-center">Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </View>
  );
}
