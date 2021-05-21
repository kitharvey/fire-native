import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';

interface DeleteButtonProps {
    handleDelete: (id: string) => void
    id: string
    isChecked: boolean
}

const DeleteButton: React.FC<DeleteButtonProps> = ({handleDelete, id, isChecked}) => {
        return (
            <TouchableOpacity onPress={() => handleDelete(id)}>
                <View>
                    {isChecked && <FontAwesome name="close" size={16} color="#e74c3c" />}
                </View>
            </TouchableOpacity>
        );
}


export default DeleteButton