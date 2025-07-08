import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import '../global.css';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="courses" options={{ headerShown: false }} />
        <Stack.Screen name="learn" options={{ headerShown: false }} />
        <Stack.Screen 
          name="videoIntroduction" 
          options={{ 
            headerShown: false,
            presentation: 'fullScreenModal',
            animation: 'slide_from_bottom'
          }} 
        />
      </Stack>
    </>
  );
}
