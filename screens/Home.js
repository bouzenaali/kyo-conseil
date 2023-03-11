import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Sidebar from '/Users/cheimamezdour/kyoo-conseil/kyo-conseil/Components/Sidebar.js';

const Home = () => {


  return (
    <View Style={styles.page}>
    <Sidebar />
    <View style={styles.container}>
      

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <TouchableOpacity>
            <Icon name='search-outline' size={30} color='#000' />
          </TouchableOpacity>
        </View>
      
        <View styles={styles.emailsContainer}>
          <Text style={styles.emailTitle}>Scheduled emails</Text>
          <View style={styles.emails}>
            <View style={styles.email}></View>
            <View style={styles.email}></View>
          </View>
        </View>
      </View>   
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    width:'100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  emails: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  page: {
    flex:1,
    flexDirection: 'row',
    width:'50%'
  }

});
export default Home;