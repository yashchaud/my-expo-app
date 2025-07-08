import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const OtpVerificationScreen = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next input
    if (text && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyCode = () => {
    // Check if all OTP fields are filled
    const otpString = otp.join('');
    if (otpString.length === 5) {
      // Navigate to account success screen
      router.push('/accountSuccess');
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 pt-10">
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()} className="flex-row items-center mb-8">
          <View className="border border-gray-300 rounded-lg px-3 py-1 flex-row items-center">
            <Text className="text-lg mr-1 mb-2">←</Text>
            <Text className="text-base">Back</Text>
          </View>
        </TouchableOpacity>

        {/* Content */}
        <View className="items-center">
          <Text className="text-2xl font-bold text-gray-800 mb-4">Enter OTP</Text>
          <Text className="text-sm text-gray-600 text-center mb-8 px-4">
            Please enter your mobile number to create account
          </Text>

          {/* OTP Input Fields */}
          <View className="flex-row justify-center mb-8">
            {[0, 1, 2, 3, 4].map((index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg mr-2"
                maxLength={1}
                keyboardType="number-pad"
                value={otp[index]}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
          </View>

          {/* Verify Button */}
          <TouchableOpacity 
            className="w-full h-14 bg-green-600 rounded-lg justify-center items-center mb-4"
            onPress={handleVerifyCode}
          >
            <Text className="text-white text-lg font-semibold">Verify Code</Text>
          </TouchableOpacity>

          {/* Resend SMS */}
          <Text className="text-gray-600 text-sm">
            Haven't got the SMS yet?{" "}
            <Text className="text-blue-600 underline">Resend SMS</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OtpVerificationScreen;
