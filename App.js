import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VoiceComponent from './Components/voice';
import SettingsList from './Components/Settings1';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>  Settings </Text>
      <StatusBar style="auto" />
      <SettingsList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
