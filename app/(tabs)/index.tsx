import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        <Text className="text-3xl font-bold text-gray-800 mb-2">Welcome!</Text>
        <Text className="text-gray-600 mb-8">This is your home screen</Text>
        
        <View className="bg-white rounded-2xl p-6 shadow-sm mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-2">Quick Actions</Text>
          <Text className="text-gray-600 mb-4">Get started with these actions</Text>
          
          <TouchableOpacity className="bg-green-600 rounded-lg p-4 mb-3">
            <Text className="text-white font-semibold text-center">Action 1</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-blue-600 rounded-lg p-4">
            <Text className="text-white font-semibold text-center">Action 2</Text>
          </TouchableOpacity>
        </View>
        
        <Link href="/login" asChild>
          <TouchableOpacity className="bg-gray-200 rounded-lg p-4">
            <Text className="text-gray-800 font-semibold text-center">Go to Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
