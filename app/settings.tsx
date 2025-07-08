import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <ChevronLeft size={24} color="#374151" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-gray-800">Settings</Text>
        </View>
      </View>
      
      <ScrollView className="flex-1">
        <View className="p-6">
        
        <View className="bg-white rounded-2xl p-6 shadow-sm mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-4">Preferences</Text>
          
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-gray-700">Push Notifications</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#d1d5db', true: '#86efac' }}
              thumbColor={notifications ? '#16a34a' : '#f3f4f6'}
            />
          </View>
          
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-700">Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#d1d5db', true: '#86efac' }}
              thumbColor={darkMode ? '#16a34a' : '#f3f4f6'}
            />
          </View>
        </View>
        
        <View className="bg-white rounded-2xl p-6 shadow-sm">
          <Text className="text-xl font-semibold text-gray-800 mb-4">Account</Text>
          
          <TouchableOpacity className="py-3 border-b border-gray-200">
            <Text className="text-gray-700">Change Password</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="py-3 border-b border-gray-200">
            <Text className="text-gray-700">Privacy Policy</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="py-3">
            <Text className="text-red-600">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </View>
  );
}
