import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { AudioRecorder, AudioUtils } from 'react-native-audio';
import Svg, { Circle } from 'react-native-svg';

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [soundWaves, setSoundWaves] = useState([]);
  const audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';

  useEffect(() => {
    if (isListening) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isListening]);

  const startRecording = async () => {
    try {
      await AudioRecorder.prepareRecordingAtPath(audioPath, {
        SampleRate: 22050,
        Channels: 1,
        AudioQuality: 'Low',
        AudioEncoding: 'aac',
        MeteringEnabled: true
      });
      AudioRecorder.startRecording();
      setSoundWaves([]);
      setInterval(updateSoundWaves, 50);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    try {
      clearInterval(updateSoundWaves);
      const result = await AudioRecorder.stopRecording();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const updateSoundWaves = async () => {
    try {
      const result = await AudioRecorder.updateMetering();
      setSoundWaves(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.soundWaveContainer}>
        <Svg height="200" width="200">
          <Circle cx="100" cy="100" r="80" fill="#eee" />
          {soundWaves.map((level, index) => (
            <Circle key={index} cx="100" cy="100" r={(level * 70) + 20} fill="red" />
          ))}
        </Svg>
      </View>
      <TouchableOpacity onPress={() => setIsListening(!isListening)}>
        <View style={styles.button}>
          <Icon name="logo-openai" type="ionicon" color="#fff" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  soundWaveContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007aff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default VoiceAssistant;
