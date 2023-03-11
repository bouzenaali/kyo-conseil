import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSpeechRecognition } from 'react-speech-kit';

const SpeechRecognitionPage = () => {
  const [isListening, setIsListening] = useState(false);
  const { listen, stop, supported } = useSpeechRecognition();
  const spinValue = new Animated.Value(0);

  const startListening = () => {
    setIsListening(true);
    listen({
      onResult: (result) => {
        console.log(result);
      },
    });
    startAnimation();
  };

  const stopListening = () => {
    setIsListening(false);
    stop();
    spinValue.stopAnimation();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const startAnimation = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startAnimation());
  };

  return (
    <View style={styles.container}>
         {isListening && (
        <View style={[styles.voiceWaves, { marginBottom: 200 }]}>
          <View style={[styles.voiceWave, { backgroundColor: '#F62F53' }]} />
          <View style={[styles.voiceWave, { backgroundColor: '#F62F53' }]} />
          <View style={[styles.voiceWave, { backgroundColor: '#F62F53' }]} />
          <View style={[styles.voiceWave, { backgroundColor: '#F62F53' }]} />
          <View style={[styles.voiceWave, { backgroundColor: '#F62F53' }]} />
          <View style={[styles.voiceWave, { backgroundColor: '#F62F53' }]} />
          <View style={[styles.voiceWave, { backgroundColor: '#F62F53' }]} />
        </View>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={isListening ? stopListening : startListening}
      >
        <Animated.View  style={{ transform: [{ rotate: spin }] }}>
          <Ionicons name="md-mic" size={50} color={isListening ? '#F62F53' : '#1D252E'}/>
        </Animated.View>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    
    padding: 20,
   
  },
  voiceWaves: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  voiceWave: {
    height: 50,
    width: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    paddingTop:10,
    paddingBottom:50,
  },
});

export default SpeechRecognitionPage;

