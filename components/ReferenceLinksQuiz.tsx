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
    <View className="bg-orange-50 p-4">
      {/* Reference Links Section */}
      <View className="mb-6">
        <Text className="text-lg font-semibold mb-3">Reference Links</Text>
        {referenceLinks.map((link, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleLinkPress(link.url)}
            className="mb-2"
          >
            <Text className="text-blue-600 underline text-sm">{link.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Course Rating Section */}
      <View className="mb-6">
        <Text className="text-sm text-gray-600 mb-2">
          Please share Course Rating
        </Text>
        <Text className="text-xs text-gray-500 mb-3">
          If each turn is a grade of rating, 1 means you did not like the course, 5 means you liked it.
        </Text>

        {/* Rating Emojis */}
        <View className="flex-row justify-between mb-4">
          {ratingEmojis.map((item) => (
            <TouchableOpacity
              key={item.value}
              onPress={() => setSelectedRating(item.value)}
              className={`items-center p-2 rounded-full ${
                selectedRating === item.value ? 'bg-orange-200' : ''
              }`}
            >
              <Text className="text-3xl">{item.emoji}</Text>
              <Text className="text-xs mt-1">{item.value}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Send Button */}
        <TouchableOpacity className="bg-green-600 rounded-lg py-3 mb-4">
          <Text className="text-white text-center font-medium">Send</Text>
        </TouchableOpacity>
      </View>

      {/* Suggestions Section */}
      <View className="mb-6">
        <Text className="text-sm text-gray-600 mb-2">Suggestions</Text>
        <Text className="text-xs text-gray-500 mb-3">
          Is there any information that was not correct, anything you would like us to add or a new topic for us to include. Please share in the box below.
        </Text>
        
        <TextInput
          value={suggestions}
          onChangeText={setSuggestions}
          placeholder="Type your suggestions here..."
          multiline
          numberOfLines={4}
          className="bg-white border border-gray-300 rounded-lg p-3 mb-4"
          textAlignVertical="top"
        />
      </View>

      {/* Important Worlds/Concepts Section */}
      <View className="mb-6">
        <Text className="text-lg font-semibold mb-3">Important Worlds / Concepts</Text>
        
        <View className="flex-row flex-wrap gap-2">
          <TouchableOpacity className="bg-green-100 px-4 py-2 rounded-full">
            <Text className="text-green-700 text-sm">Sustainable</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-green-100 px-4 py-2 rounded-full">
            <Text className="text-green-700 text-sm">Regenerative</Text>
          </TouchableOpacity>
        </View>
      </View>

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
