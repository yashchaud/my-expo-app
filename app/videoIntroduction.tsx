import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TheorySection from '../components/TheorySection';
import ResponsiveMaps from '../components/ResponsiveMaps';
import ReferenceLinksQuiz from '../components/ReferenceLinksQuiz';

const VideoIntroductionScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { height: windowHeight } = Dimensions.get('window');
  
  // Replace this with your actual Pexels video URL
  const videoUrl = 'https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4';
  
  // Initialize the video player
  const player = useVideoPlayer(videoUrl, player => {
    player.loop = false;
    player.play();
  });

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Video Container */}
        <View style={{ height: windowHeight }}>
          <VideoView
            style={styles.fullscreenVideo}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
            contentFit="cover"
          />
          
          {/* Video Title Overlay - Bottom positioned */}
          <View style={styles.titleOverlay}>
            <View className="bg-white/90 rounded-full px-8 py-3">
              <Text className="text-base font-semibold text-gray-800">Regenerative Farming</Text>
            </View>
          </View>
        </View>
        
        {/* Theory Section - Below the video */}
        <TheorySection />
        
        {/* Responsive Maps Section - Below the theory */}
        <ResponsiveMaps />
        
        {/* Reference Links and Quiz Section - Below the maps */}
        <ReferenceLinksQuiz />
      </ScrollView>
      
      {/* Header Overlay - Fixed Position */}
      <View 
        style={[styles.headerOverlay, { paddingTop: insets.top }]}
      >
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    flex: 1,
  },
  fullscreenVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
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
    bottom: 80,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
});

export default VideoIntroductionScreen;
