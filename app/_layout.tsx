import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import '../global.css';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="courses" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
