import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Sidebar from './comps/Sidebar';
import SearchBar from './comps/Searchbar';
export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <SearchBar />
      <Sidebar />
      
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
