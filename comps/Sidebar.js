import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Sidebar = () => {
  const [buttonStyle, setButtonStyle] = useState({
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  });

  const handlePress = () => {
    setButtonStyle({
      width: '100%',
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginVertical: 5,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/avatar.png')} />
      </View>
      <TouchableOpacity style={[styles.iconContainer, buttonStyle]} onPress={handlePress}>
        <Icon name='home-outline' size={30} color='#fff' />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.iconContainer, buttonStyle]} onPress={handlePress}>
        <Icon name='mail-outline' size={30} color='#fff' />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.iconContainer, buttonStyle]} onPress={handlePress}>
        <Icon name='person-outline' size={30} color='#fff' />
      </TouchableOpacity>
      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity style={[styles.bottomIconContainer, buttonStyle]} onPress={handlePress}>
          <Icon name='settings-outline' size={30} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomIconContainer}>
          <Icon name='log-out-outline' size={30} color='#fff' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D252E',
    width: '20%',
    paddingTop: 30, 
    paddingLeft: 5, 
    paddingBottom: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
    borderBottomRightRadius:8,
    borderBottomLeftRadius:30,
  },
  profileContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  iconContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  bottomIconContainer:{
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  bottomIconsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1,
  }
});

export default Sidebar;
