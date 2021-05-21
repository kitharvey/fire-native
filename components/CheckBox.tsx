import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

interface CheckBoxProps {
    isChecked: boolean
    id: string
    onChecked: (key: string) => void
}

const CheckBox: React.FC<CheckBoxProps> = ({isChecked, onChecked, id}) => {
    return(
        <TouchableOpacity style={styles.checkbox} onPress={() => onChecked(id)}>
            <Text style={{color: "#aaa"}}>
                {isChecked && <FontAwesome name="check-circle" size={20} color="#aaa" />}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    checkbox: {
      width: 20,
      height: 20,
      marginRight: 10,
      backgroundColor: "#fff0",
      borderWidth: 3,
      borderRadius: 20,
      borderColor: "#aaa",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  export default CheckBox