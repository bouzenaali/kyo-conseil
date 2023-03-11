import React from "react";
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function List(props) {
  return (
    <View style={styles.listItem}>
         <ListItem
      title="Drafts"
      leading={<Icon name="email-open" size={24} />}
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
    
         <ListItem
      title="Drafts"
      leading={<Icon name="email-open" size={24} />}
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
    
         <ListItem
      title="Drafts"
      leading={<Icon name="email-open" size={24} />}
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
     
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
