import { View, Text, Keyboard, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

const Form = (props) => {
  const [task, setTask] = useState('')

  const handleAddTask = () => {
    if (task.length === 0) {
      alert('Enter your task!')
      return false
    } 
    props.onAddTask(task)
    setTask('')
    Keyboard.dismiss() // hide keyboard
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
      style={styles.addTask}
    >
      <TextInput
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder="Your Task" 
        style={styles.input}
      >

      </TextInput>
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Form