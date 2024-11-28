import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <Text style={styles.taskText}>{item}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
