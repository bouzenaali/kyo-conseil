import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Speech } from 'expo';


const VoiceComponent = () => {
  const [transcription, setTranscription] = useState('');

  const startVoiceRecognition = async () => {
    try {
      await Speech.requestPermissionsAsync();
      await Speech.startListeningAsync({ language: 'en-US' }, (result) => {
        setTranscription(result.transcription);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const stopVoiceRecognition = async () => {
    try {
      await Speech.stopListeningAsync();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Start" onPress={startVoiceRecognition} />
      <Button title="Stop" onPress={stopVoiceRecognition} />
      <Text>{transcription}</Text>
    </View>
  );
};

export default VoiceComponent;
