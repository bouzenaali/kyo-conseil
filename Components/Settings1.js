import React, { useState }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const SettingsItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Ionicons name={icon} size={24} color="#F62F53" />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const SettingsList = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
  return (
    <View style={styles.container}>
        <Text style={styles.Text}>  Settings </Text>
        <View style={styles.itemContainer}>
            <SettingsItem icon="ios-sunny" label="Appearance" onPress={() => {}}  >
                <Switch value={isSwitchOn} onValueChange={setIsSwitchOn} />
            </SettingsItem>
        </View>  
        <View style={styles.itemContainer}>
            <SettingsItem icon="ios-lock-closed" label="Privacy" onPress={() => {}} />
        </View>
        <View style={styles.itemContainer}>
            <SettingsItem  icon="ios-document-text" label="Terms of Service" onPress={() => {}} />
      </View>
      <View style={styles.itemContainer}>
            <SettingsItem icon="help-circle-outline" label="About Us" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop:150, // we have to change it depending on the position of the other componenets
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: 'regular',
    color:'#1D252E',
  },
    itemContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      backgroundColor: '#1D252E26',
      width:300,
      paddingLeft:10,
      
    },
    SettingsItem:{
        backgroundColor:'#ddd',
    },
    Text:{
        fontFamily: 'Helvetica',
        fontWeight: 'regular',
        fontSize:20,
        textAlign : 'left',
        paddingBottom:12,
    },
});

export default SettingsList;
