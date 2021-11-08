import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert } from 'react-native';
import { NavBar } from './src/components/NavBar';
import { MainScreen } from './src/screens/MainScreen';
import { ToDoScreen } from './src/screens/ToDoSreen';

export default function App() {

  const [toDoId, setToDoId] = useState(null)
  const [toDos, setToDos] = useState(
    [
      // {id: '1', title: 'Learn React Native'},
      // {id: '2', title: 'Write App'},
    ]
  )

  const addToDo = (title) => {
    setToDos(prev => [
      ...prev, 
      {
        id: Date.now().toString(),
        title: title,
      }
    ])
  }

  const removeToDo = id => {
    const todo = toDos.find(t => t.id === id)
    Alert.alert(
      "Deleting element",
      `Are you sure that you want to delete ${todo.title}?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Delete", 
          style: 'destructive',
          onPress: () => {
            setToDoId(null)
            setToDos(prev => prev.filter(todo => todo.id !== id))
          } 
        }
      ],
      { cancelable: false }
    );
  }
  
  const updateToDo = (id, title) => {
    setToDos(old => old.map(toDo => {
      if (toDo.id === id) {
        toDo.title = title
      }
      return toDo
    }))
  }

  let content = (
    <MainScreen
      toDos={toDos}
      addToDo={addToDo}
      removeToDo={removeToDo}
      openToDo={setToDoId}
    />
  )

  if (toDoId) {

    const selectedToDo = toDos.find(todo => todo.id === toDoId)

    content = (
      <ToDoScreen
        goBack={() => {
          setToDoId(null)
        }}
        onRemove={removeToDo}
        onSave={updateToDo}
        toDo={selectedToDo}
      />
    )
  }

  return (
    <View>
      <NavBar title="Todo App"/>
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
