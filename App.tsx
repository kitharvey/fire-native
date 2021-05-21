import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TodoList from './screens/TodoList';
import AddToDo from './screens/AddToDo';
import {RootStackParamList} from './types/types'

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={TodoList} />
            <Stack.Screen name="AddToDo" component={AddToDo} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


