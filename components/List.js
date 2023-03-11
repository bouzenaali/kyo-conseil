import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function List(props) {
  return (
    <View style={styles.listItem}>
      
      <View style={styles.listItemEmail}>
        <MaterialIcons name="email" size={24} color="black" style={styles.emailIcon} />
        <View style={styles.listItemTitle}>
        <Text>{props.title}</Text>
      </View>
      </View>
      <View style={styles.listItemIcons}>
        <TouchableOpacity onPress={() => props.onDelete(props.id)}>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.onEdit(props.id)}>
          <MaterialIcons name="edit" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemTitle: {
    flex: 1,
  },
  listItemEmail: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailIcon: {
    marginRight: 8,
  },
  emailText: {
    flex: 1,
  },
  listItemIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 70,
  },
});

export default List;
