import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Easing, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSpeechRecognition } from 'react-speech-kit';

const SpeechRecognitionPage = () => {
  const [isListening, setIsListening] = useState(false);
  const { listen, stop, supported } = useSpeechRecognition();

  const wave1Value = new Animated.Value(0);
  const wave2Value = new Animated.Value(0);
  const wave3Value = new Animated.Value(0);
  const wave4Value = new Animated.Value(0);
  const wave5Value = new Animated.Value(0);
  const wave6Value = new Animated.Value(0);
  const wave7Value = new Animated.Value(0);

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
    stopAnimation();
  };

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(wave1Value, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(wave2Value, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(wave3Value, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(wave4Value, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(wave5Value, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(wave6Value, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(wave7Value, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const stopAnimation = () => {
    wave1Value.stopAnimation();
    wave2Value.stopAnimation();
    wave3Value.stopAnimation();
    wave4Value.stopAnimation();
    wave5Value.stopAnimation();
    wave6Value.stopAnimation();
    wave7Value.stopAnimation();
  };

  const wave1Height = wave1Value.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
  });
  const wave2Height = wave2Value.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 40],
  });
  const wave3Height = wave3Value.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });
  const wave4Height = wave4Value.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });
  const wave5Height = wave5Value.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
    });
    const wave6Height = wave6Value.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
    });
    const wave7Height = wave7Value.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
    });
    
    return (
    <View style={styles.container}>
    <View style={styles.waveContainer}>
    <Animated.View style={[styles.wave, { height: wave1Height }]} />
    <Animated.View style={[styles.wave, { height: wave2Height }]} />
    <Animated.View style={[styles.wave, { height: wave3Height }]} />
    <Animated.View style={[styles.wave, { height: wave4Height }]} />
    <Animated.View style={[styles.wave, { height: wave5Height }]} />
    <Animated.View style={[styles.wave, { height: wave6Height }]} />
    <Animated.View style={[styles.wave, { height: wave7Height }]} />
    </View>
    <TouchableOpacity style={styles.button} onPress={isListening ? stopListening : startListening}>
    <Ionicons name={isListening ? 'mic' : 'mic-off'} size={32} color="white" />
    </TouchableOpacity>
    {!supported && <Text style={styles.notSupportedText}>Speech recognition is not supported on this device.</Text>}
    </View>
    );
    };
    
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    },
    waveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 60,
    },
    wave: {
    width: 10,
    backgroundColor: '#AED6F1',
    borderRadius: 5,
    },
    button: {
    backgroundColor: '#3498DB',
    borderRadius: 50,
    padding: 20,
    },
    notSupportedText: {
    marginTop: 20,
    color: 'red',
    },
    });
    
    export default SpeechRecognitionPage;
