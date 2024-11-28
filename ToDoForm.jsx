import React from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = React.useState('');

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button 
        title="Add Task" 
        onPress={() => {
          addTask(taskText);
          setTaskText(''); // Clear input field after adding the task
        }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default ToDoForm;
