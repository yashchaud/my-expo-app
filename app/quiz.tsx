import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { CircleArrowLeft, HelpCircle } from 'lucide-react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export default function QuizScreen() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [infoVisible, setInfoVisible] = useState(false);

  // Sample quiz questions - in a real app, these would come from your backend based on selected topics
  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the ideal pH range for most crops?",
      options: ["4.5 - 5.5", "6.0 - 7.0", "7.5 - 8.5", "8.5 - 9.5"],
      correctAnswer: 1,
      explanation: "Most crops grow best in slightly acidic to neutral soil with a pH of 6.0 - 7.0."
    },
    {
      id: 2,
      question: "Which of the following is a nitrogen-fixing crop?",
      options: ["Wheat", "Rice", "Legumes", "Corn"],
      correctAnswer: 2,
      explanation: "Legumes like beans, peas, and lentils have the ability to fix atmospheric nitrogen through symbiotic bacteria in their root nodules."
    },
    {
      id: 3,
      question: "What is the recommended spacing for planting maize?",
      options: ["10-15 cm", "25-30 cm", "45-50 cm", "60-65 cm"],
      correctAnswer: 1,
      explanation: "Maize should be planted with 25-30 cm spacing between plants for optimal growth and yield."
    },
    {
      id: 4,
      question: "Which irrigation method is most water-efficient?",
      options: ["Flood irrigation", "Sprinkler irrigation", "Drip irrigation", "Furrow irrigation"],
      correctAnswer: 2,
      explanation: "Drip irrigation is the most water-efficient method, delivering water directly to plant roots with minimal waste."
    },
    {
      id: 5,
      question: "What is the best time to apply fertilizer?",
      options: ["During hot midday", "Before heavy rain", "Early morning or evening", "During drought"],
      correctAnswer: 2,
      explanation: "Fertilizer should be applied in early morning or evening when temperatures are cooler and plants can better absorb nutrients."
    }
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    // Check if answer is correct
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    
    // Mark question as answered
    if (!answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      // Quiz completed - navigate to results page
      router.push({
        pathname: '/quizResults',
        params: { 
          score: score.toString(), 
          total: questions.length.toString()
        }
      });
    }
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <View className="flex-1 bg-[#F1E6D4]">
      <ScrollView className="flex-1">
        <View className="px-6 pt-12 pb-6">
          {/* Header */}
          <View className="flex-row justify-between items-center">
            <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
              <CircleArrowLeft size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setInfoVisible(true)} activeOpacity={0.7}>
              <View className="w-10 h-10 rounded-full items-center justify-center">
                <HelpCircle size={22} color="black" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Progress Bar */}
          <View className="mt-6 mb-8">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-sm font-medium text-gray-600">
                Question {currentQuestionIndex + 1} of {questions.length}
              </Text>
              <Text className="text-sm font-medium text-gray-600">
                Score: {score}/{answeredQuestions.length}
              </Text>
            </View>
            <View className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <View 
                className="h-full bg-green-600 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </View>
          </View>

          {/* Question */}
          <View className="bg-white rounded-2xl p-6 mb-6" 
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
            <Text className="text-xl font-bold text-gray-800 mb-4">
              {currentQuestion.question}
            </Text>
          </View>

          {/* Options */}
          <View className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;

              return (
                <TouchableOpacity
                  key={index}
                  className={`p-4 rounded-xl border-2 ${
                    isSelected ? 'bg-blue-100 border-blue-600' :
                    'bg-white border-gray-200'
                  }`}
                  onPress={() => handleAnswerSelect(index)}
                  activeOpacity={0.7}
                  style={{
                    borderBottomWidth: 3,
                    borderRightWidth: 2,
                    borderBottomColor: isSelected ? '#1e3a8a' : '#d1d5db',
                    borderRightColor: isSelected ? '#1e40af' : '#d1d5db',
                  }}
                >
                  <View className="flex-row items-center">
                    <View className={`w-6 h-6 rounded-full border-2 mr-3 items-center justify-center ${
                      isSelected ? 'bg-blue-600 border-blue-600' :
                      'bg-white border-gray-400'
                    }`}>
                      {isSelected && (
                        <View className="w-3 h-3 rounded-full bg-white" />
                      )}
                    </View>
                    <Text className={`flex-1 text-base ${
                      isSelected ? 'text-blue-800 font-semibold' :
                      'text-gray-700'
                    }`}>
                      {option}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

        </View>
      </ScrollView>

      {/* Action Button */}
      <View className="px-6 pb-10 pt-2 bg-[#F1E6D4]">
        <TouchableOpacity
          className={`py-4 rounded-full ${
            selectedAnswer !== null ? 'bg-[#00522A]' : 'bg-gray-400'
          }`}
          onPress={() => handleNextQuestion()}
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
            borderColor: selectedAnswer !== null ? '#00451F' : '#d1d5db',
            borderBottomColor: selectedAnswer !== null ? '#002e14' : '#d1d5db',
            borderRightColor: selectedAnswer !== null ? '#002e14' : '#d1d5db',
            opacity: selectedAnswer === null ? 0.6 : 1,
          }}
        >
          <Text className="text-white text-center font-bold text-lg">
            {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Info Modal */}
      <Modal
        visible={infoVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setInfoVisible(false)}
      >
        <View className="flex-1 bg-black/40 items-center justify-center px-8">
          <View className="bg-white rounded-2xl p-6 w-full max-w-md">
            <Text className="text-xl font-bold mb-4 text-center">How to take the quiz</Text>
            <Text className="text-gray-700 mb-6">
              1. Read each question carefully{`\n`}
              2. Select your answer by tapping on an option{`\n`}
              3. Tap "Next Question" to continue{`\n`}
              4. Complete all questions to see your results{`\n\n`}
              Your score is calculated automatically.
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
