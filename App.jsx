import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ToDoForm from './ToDoForm.jsx';
import ToDoList from './ToDoList.jsx';

export default function App() {
  const [tasks, setTasks] = React.useState([]);

  // Implementing addTask function
  const addTask = (taskText) => {
    if (taskText.trim()) { // Ensure no empty tasks are added
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <View style={styles.container}>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
