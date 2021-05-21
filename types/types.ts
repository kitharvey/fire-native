import { StackNavigationProp } from '@react-navigation/stack';




export interface TodoItemInterface{
    title: string
    description: string
    key: string
    isChecked: boolean
}

export type RootStackParamList = {
    Home: undefined
    AddToDo: undefined
  };

export type ScreenInterface = {
    navigation: StackNavigationProp<RootStackParamList>;
};
