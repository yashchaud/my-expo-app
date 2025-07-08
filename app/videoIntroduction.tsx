import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';

const VideoIntroductionScreen = () => {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the video page
    router.replace('/video');
  }, []);

  return null;
};

export default VideoIntroductionScreen;
