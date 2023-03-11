import { StatusBar } from 'expo-status-bar';
import { Settings, StyleSheet, Text, View } from 'react-native';
import Settings from 'Screen /SettingsPage.js';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Settings/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderColor:'#1D252E',
  },
});
