import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const VideoSection = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { height: windowHeight } = Dimensions.get('window');
  const videoUrl = 'https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4';

  const player = useVideoPlayer(videoUrl, player => {
    player.loop = false;
    player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView
        style={{ height: windowHeight }}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        contentFit="cover"
      />
      
      {/* Header Overlay */}
      <View style={[styles.headerOverlay, { paddingTop: insets.top }]}>
        <View className="flex-1 flex-row items-center justify-between px-4 py-4">
          <TouchableOpacity onPress={() => router.back()}>
            <View className="w-10 h-10 rounded-full bg-white/80 border border-gray-300 items-center justify-center">
              <Text className="text-xl">←</Text>
            </View>
          </TouchableOpacity>
          
          <View className="flex-1 mx-4">
            <Text className="text-center text-lg font-semibold text-white">
              Introduction
            </Text>
            <Text className="text-center text-white/80 text-sm">Regenerative Farming</Text>
          </View>
          
          <TouchableOpacity className="p-2">
            <Text className="text-base text-white">Share</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Video Title Overlay */}
      <View style={styles.titleOverlay}>
        <View className="bg-white/90 rounded-full px-8 py-3">
          <Text className="text-base font-semibold text-gray-800">Regenerative Farming</Text>
        </View>
      </View>
      
      {/* Next Button */}
      <TouchableOpacity 
        onPress={() => router.push('/theory')} 
        className="absolute bottom-10 left-4 right-4 bg-green-600 rounded-lg py-4"
      >
        <Text className="text-white text-center font-semibold text-lg">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  titleOverlay: {
    position: 'absolute',
    bottom: 120,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
});

export default VideoSection;

