import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function SettingsComponent() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingOptionText}>Appearance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingOptionText}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingOptionText}>Terms of Service</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingOptionText}>About Us</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  settingOption: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 20,
  },
  settingOptionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
