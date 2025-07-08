import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const SelectLanguageScreen = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const languages = [
    { code: 'en', name: 'English', script: 'A' },
    { code: 'hi', name: 'हिंदी', script: 'अ' },
    { code: 'mr', name: 'मराठी', script: 'म' },
    { code: 'te', name: 'తెలుగు', script: 'తె' },
    { code: 'kn', name: 'ಕನ್ನಡ', script: 'ಕ' }
  ];

  const handleGoToHomepage = () => {
    if (selectedLanguage) {
      // Navigate to homepage with selected language
      console.log('Selected language:', selectedLanguage);
      // You can navigate to home or next screen
      // router.push('/home');
    }
  };

  const handleWatchIntroduction = () => {
    // Navigate to introduction video or screen
    router.push('/courses');
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-16">
        {/* Title */}
        <Text className="text-2xl font-bold text-center mb-8">
          Select Language
        </Text>

        {/* Language Grid */}
        <View className="flex-row flex-wrap justify-between mb-8">
          {languages.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              onPress={() => setSelectedLanguage(lang.code)}
              className={`w-[30%] aspect-square rounded-2xl border-2 mb-4 items-center justify-center ${
                selectedLanguage === lang.code
                  ? 'border-green-600 bg-green-50'
                  : 'border-gray-300 bg-white'
              }`}
            >
              <Text className="text-3xl font-bold mb-2">{lang.script}</Text>
              <Text className="text-sm text-gray-700">{lang.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Buttons */}
        <View className="mt-auto pb-8">
          <TouchableOpacity
            className={`w-full h-14 rounded-xl justify-center items-center mb-4 ${
              selectedLanguage
                ? 'bg-green-600'
                : 'bg-gray-400'
            }`}
            onPress={handleWatchIntroduction}
           >
            <Text className="text-white text-lg font-semibold">
              Go to Homepage
            </Text>
          </TouchableOpacity>

       
        </View>
      </View>
    </ScrollView>
  );
};

export default SelectLanguageScreen;
