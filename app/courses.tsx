import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeft, BookOpen, Clock, Star } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const CourseCard = ({ title, description, duration, rating, onPress }) => {
  return (
    <TouchableOpacity 
      className="bg-white rounded-2xl p-6 mb-4 shadow-sm"
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View className="flex-row items-start justify-between mb-3">
        <View className="flex-1">
          <Text className="text-xl font-semibold text-gray-800 mb-2">{title}</Text>
          <Text className="text-gray-600 text-sm leading-5">{description}</Text>
        </View>
        <View className="ml-4">
          <BookOpen size={24} color="#16a34a" />
        </View>
      </View>
      
      <View className="flex-row items-center justify-between mt-4">
        <View className="flex-row items-center">
          <Clock size={16} color="#6b7280" />
          <Text className="text-sm text-gray-500 ml-1">{duration}</Text>
        </View>
        <View className="flex-row items-center">
          <Star size={16} color="#fbbf24" fill="#fbbf24" />
          <Text className="text-sm text-gray-700 ml-1">{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function CoursesScreen() {
  const router = useRouter();

  const courses = [
    {
      id: 1,
      title: "Introduction to Sustainable Farming",
      description: "Learn the basics of sustainable farming practices and improve your crop yield.",
      duration: "2 hours",
      rating: "4.8"
    },
    {
      id: 2,
      title: "Financial Literacy for Farmers",
      description: "Master basic financial concepts to better manage your farm income and expenses.",
      duration: "1.5 hours",
      rating: "4.6"
    },
    {
      id: 3,
      title: "Livestock Management Basics",
      description: "Essential knowledge for raising and caring for farm animals effectively.",
      duration: "3 hours",
      rating: "4.9"
    },
    {
      id: 4,
      title: "Organic Pest Control Methods",
      description: "Natural and effective ways to protect your crops from pests without harmful chemicals.",
      duration: "1 hour",
      rating: "4.7"
    },
    {
      id: 5,
      title: "Family Nutrition Planning",
      description: "Plan nutritious meals for your family using local produce and resources.",
      duration: "2.5 hours",
      rating: "4.5"
    },
    {
      id: 6,
      title: "Modern Family Planning",
      description: "Important information about family planning and reproductive health.",
      duration: "1.5 hours",
      rating: "4.8"
    }
  ];

  const handleCoursePress = (course) => {
    console.log(`Selected course: ${course.title}`);
    // Navigate to course details or start the course
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <View className="flex-row items-center mb-4">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <ChevronLeft size={24} color="#374151" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-gray-800">Available Courses</Text>
        </View>
        <Text className="text-gray-600">Choose a course to begin your learning journey</Text>
      </View>

      {/* Course List */}
      <ScrollView className="flex-1 px-6 py-4" showsVerticalScrollIndicator={false}>
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            duration={course.duration}
            rating={course.rating}
            onPress={() => handleCoursePress(course)}
          />
        ))}
        
        {/* View More Link */}
        <TouchableOpacity 
          className="py-4 mb-4" 
          onPress={() => console.log('View More pressed')}
          activeOpacity={0.7}
        >
          <Text className="text-green-600 text-center font-semibold text-base">
            View More
          </Text>
        </TouchableOpacity>
      </ScrollView>
      
      {/* Next Button */}
      <View className="px-6 pb-6 bg-gray-50">
        <TouchableOpacity 
          className="bg-green-600 py-4 rounded-full" 
          onPress={() => console.log('Next pressed')}
          activeOpacity={0.8}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
