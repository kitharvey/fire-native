import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TodoItemInterface } from '../types/types';
import CheckBox from './CheckBox';
import DeleteButton from './DeleteButton';

interface TodoItemProps {
  item: TodoItemInterface,
  handlePress: (key: string) => void,
  handleCheck: (key: string) => void,
  handleAdd: () => void,
}

const TodoItem: React.FC<TodoItemProps> = ({item, handlePress, handleCheck, handleAdd}) => {
        return (
                <View style={{flexDirection:'row', alignItems: 'center', marginTop: 10,}} >
                    <CheckBox isChecked={item.isChecked} onChecked={handleCheck} id={item.key}  />
                    <View style={[styles.itemContainer, {backgroundColor: item.isChecked ? "smokewhite" : "white"}]} >
                        <TouchableOpacity onPress={() => handleAdd()} >
                           <Text style={{textDecorationLine: item.isChecked ? "line-through" : "none"}}>{item.title}</Text>
                        </TouchableOpacity>
                        <DeleteButton handleDelete={handlePress} id={item.key} isChecked={item.isChecked} />
                    </View>
                </View>
        );
}

const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
      paddingVertical: 20,
      paddingLeft: 20,
      borderRadius: 5,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      
    },
  });


export default TodoItem