import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Linking } from 'react-native';

const ReferenceLinksQuiz = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [suggestions, setSuggestions] = useState('');

  const referenceLinks = [
    {
      title: 'With Science, We Can. Degraded Lands Transform into Productive Farms in Latur, India',
      url: 'https://example.com/link1',
    },
    {
      title: 'With Science, We Can. Degraded Lands Transform into Productive Farms in Latur, India',
      url: 'https://example.com/link2',
    },
    {
      title: 'With Science, We Can. Degraded Lands Transform into Productive Farms in Latur, India',
      url: 'https://example.com/link3',
    },
  ];

  const ratingEmojis = [
    { emoji: '😞', value: 1 },
    { emoji: '😕', value: 2 },
    { emoji: '😐', value: 3 },
    { emoji: '😊', value: 4 },
    { emoji: '😄', value: 5 },
  ];

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View className=" bg-white p-4">
       

 
 

 

      {/* Take Quiz Button */}
      <TouchableOpacity className="bg-green-600 rounded-lg py-2 mb-4">
        <Text className="text-white text-center font-semibold text-lg">Take quiz</Text>
      </TouchableOpacity>

      {/* Download Offline Button */}
      <TouchableOpacity className="bg-gray-100 border border-gray-300 rounded-lg py-2 mb-12">
        <Text className="text-gray-700 text-center font-medium">Download OFFLINE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReferenceLinksQuiz;
