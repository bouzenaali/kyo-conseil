import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import  Searchbar  from '/Users/cheimamezdour/kyoo-conseil/kyo-conseil/Components/Searchbar.js';
import Settings from '/Users/cheimamezdour/kyoo-conseil/kyo-conseil/Components/Settings';
import  Sidebar  from '/Users/cheimamezdour/kyoo-conseil/kyo-conseil/Components/Sidebar.js';


const SettingsPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
          
            <Sidebar/>
            < Searchbar/>
            <Settings/>
            
            
           
           
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
   
   
  },
});

export default SettingsPage;
