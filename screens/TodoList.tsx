import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import TodoItem from '../components/TodoItem';
import generateList, {genString} from '../helpers/GenerateRandomList';
import generateKey from '../helpers/KeyGenerator';
import {TodoItemInterface, ScreenInterface} from '../types/types'
import { AntDesign } from '@expo/vector-icons';

const sampleList = generateList(5)

const TodoList: React.FC<ScreenInterface> = ({navigation}) => {
        const [todoList, setTodoList] = useState<TodoItemInterface[]>(sampleList)

        const removeItemFromLists = (key: string) => {
                setTodoList( prevList => prevList.filter(item => !(item.key === key && item.isChecked)) );
            };

        const handleAddToDo = () => {
                const randomString = genString(5)
                const newItem = {
                        title: randomString,
                        description: randomString,
                        isChecked: false,
                        key: generateKey(randomString)
                }
                setTodoList([...todoList, newItem])
        }

        const handleAdd = () => {
                navigation.push('AddToDo')
        }

        const handleCheck = (key: string) => {
                let listCopy = [...todoList]
                const itemIndex = listCopy.findIndex(item => item.key === key )
                listCopy[itemIndex] = {...listCopy[itemIndex], isChecked: !listCopy[itemIndex].isChecked}
                setTodoList(listCopy)
        }

         
        return (
                <View style={styles.container} >
                                <View style={styles.addButton} >
                                  <TouchableOpacity onPress={handleAddToDo} >
                                        <AntDesign name="plus" size={16} color='white' />
                                  </TouchableOpacity>
                                </View>
                        <FlatList data={todoList} renderItem={ ({item}) => <TodoItem item={item} handlePress={removeItemFromLists} handleCheck={handleCheck} handleAdd={handleAdd}/> } />
                </View>
        );
}

const styles = StyleSheet.create({
        container: {
          padding: 20,
          height: '90vh',
          position: 'relative',
        },
        addButton: {
          position: 'absolute',
          bottom: 50,
          right: 50,
          height: 40,
          width: 40,
          borderRadius: 40,
          alignItems:  'center',
          justifyContent: 'center',
          backgroundColor: "#3498db",
          zIndex: 10,
        }
      });


export default TodoList