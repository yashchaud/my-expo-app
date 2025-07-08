import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Trophy, RefreshCw, ArrowRight, Home } from 'lucide-react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import React from 'react';

export default function QuizResultsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const score = parseInt(params.score as string || '0');
  const total = parseInt(params.total as string || '0');
  const percentage = Math.round((score / total) * 100);
  
  // Determine performance level and feedback
  const getPerformanceFeedback = () => {
    if (percentage >= 80) {
      return {
        level: 'Excellent!',
        message: 'You have mastered this topic. Keep up the great work!',
        color: '#16a34a',
        bgColor: '#dcfce7'
      };
    } else if (percentage >= 60) {
      return {
        level: 'Good Job!',
        message: `You're doing well. A little more practice will make you perfect.`,
        color: '#2563eb',
        bgColor: '#dbeafe'
      };
    } else if (percentage >= 40) {
      return {
        level: 'Keep Learning!',
        message: `You're making progress. Review the material and try again.`,
        color: '#f59e0b',
        bgColor: '#fef3c7'
      };
    } else {
      return {
        level: `Don't Give Up!`,
        message: `Learning takes time. Review the lessons and you'll improve.`,
        color: '#dc2626',
        bgColor: '#fee2e2'
      };
    }
  };

  const feedback = getPerformanceFeedback();

  const handleRetakeQuiz = () => {
    // Navigate back to quiz
    router.replace('/quiz');
  };

  const handleContinueLearning = () => {
    // Navigate back to learn page to select new topics
    router.push('/learn');
  };

  const handleGoHome = () => {
    // Navigate to home/courses page
    router.push('/courses');
  };

  return (
    <View className="flex-1 bg-[#F1E6D4]">
      <ScrollView className="flex-1">
        <View className="px-6 pt-12 pb-6">
          {/* Trophy Icon */}
          <View className="items-center mb-6">
            <View 
              className="w-24 h-24 rounded-full items-center justify-center"
              style={{ backgroundColor: feedback.bgColor }}
            >
              <Trophy size={48} color={feedback.color} />
            </View>
          </View>

          {/* Results Card */}
          <View 
            className="bg-white rounded-2xl p-6 mb-6"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 5.84,
              elevation: 5,
              borderWidth: 1,
              borderColor: '#e5e7eb',
              borderBottomWidth: 3,
              borderRightWidth: 2,
              borderBottomColor: '#d1d5db',
              borderRightColor: '#d1d5db',
            }}
          >
            <Text className="text-3xl font-bold text-center mb-2" style={{ color: feedback.color }}>
              {feedback.level}
            </Text>
            
            <Text className="text-5xl font-bold text-center text-gray-800 mb-2">
              {score}/{total}
            </Text>
            
            <Text className="text-xl text-center text-gray-600 mb-4">
              You scored {percentage}%
            </Text>
            
            <View className="h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
              <View 
                className="h-full rounded-full transition-all"
                style={{ 
                  width: `${percentage}%`,
                  backgroundColor: feedback.color 
                }}
              />
            </View>
            
            <Text className="text-center text-gray-700">
              {feedback.message}
            </Text>
          </View>

          {/* Score Breakdown */}
          <View className="bg-white rounded-xl p-4 mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Score Breakdown</Text>
            <View className="space-y-2">
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Correct Answers</Text>
                <Text className="font-semibold text-green-600">{score}</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Incorrect Answers</Text>
                <Text className="font-semibold text-red-600">{total - score}</Text>
              </View>
              <View className="h-px bg-gray-200 my-2" />
              <View className="flex-row justify-between">
                <Text className="text-gray-600 font-semibold">Total Questions</Text>
                <Text className="font-bold text-gray-800">{total}</Text>
              </View>
            </View>
          </View>

          {/* Achievement Message */}
          {percentage >= 80 && (
            <View className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <Text className="text-green-800 text-center font-semibold">
                🎉 Achievement Unlocked! You've mastered this topic!
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View className="px-6 pb-10 pt-2 bg-[#F1E6D4]">
        {/* Retake Quiz Button */}
        <TouchableOpacity
          className="py-4 rounded-full bg-blue-600 mb-3 flex-row items-center justify-center"
          onPress={handleRetakeQuiz}
          activeOpacity={0.8}
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 5.84,
            elevation: 8,
            borderWidth: 1,
            borderBottomWidth: 3,
            borderRightWidth: 2,
            borderColor: '#1e3a8a',
            borderBottomColor: '#1e3a8a',
            borderRightColor: '#1e40af',
          }}
        >
          <RefreshCw size={20} color="white" className="mr-2" />
          <Text className="text-white text-center font-bold text-lg ml-2">
            Retake Quiz
          </Text>
        </TouchableOpacity>

        {/* Continue Learning Button */}
        {/* <TouchableOpacity
          className="py-4 rounded-full bg-[#00522A] mb-3 flex-row items-center justify-center"
          onPress={handleContinueLearning}
          activeOpacity={0.8}
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 5.84,
            elevation: 8,
            borderWidth: 1,
            borderBottomWidth: 3,
            borderRightWidth: 2,
            borderColor: '#00451F',
            borderBottomColor: '#002e14',
            borderRightColor: '#002e14',
          }}
        >
          <ArrowRight size={20} color="white" className="mr-2" />
          <Text className="text-white text-center font-bold text-lg ml-2">
            Continue Learning
          </Text>
        </TouchableOpacity> */}

        {/* Home Button */}
        {/* <TouchableOpacity
          className="py-3"
          onPress={handleGoHome}
          activeOpacity={0.7}
        >
          <View className="flex-row items-center justify-center">
            <Home size={20} color="#374151" className="mr-2" />
            <Text className="text-gray-700 text-center font-semibold ml-2">
              Back to Topics
            </Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
