import React, { useState } from 'react'
import { Text, View, ScrollView, Alert } from 'react-native'
import Task from './components/Task'
import Form from './components/Form'
import styles from './App.components.style'

export default function App() {
  const [taskList, setTaskList] = useState([])

  const handleAddTask = (task) => {
    // Add task
    setTaskList([...taskList, task])
  }

  const handleDeleteTask = (index) => {
    Alert.alert(
      "Alert",
      "Do you want to delete your task?",
      [
        {
          text: "OK",
          onPress: () => {
            let taskListTmp = [...taskList]
            taskListTmp.splice(index, 1)
            setTaskList(taskListTmp)
          },
          style: "ok"
        },
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView>
          {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index)}/>
            })
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}