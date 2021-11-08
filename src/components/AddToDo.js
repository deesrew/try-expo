import React, {useState} from "react";
import { View, StyleSheet, TextInput, Button, ToolbarAndroidBase } from "react-native";
import { THEME } from "../theme";

export const AddToDo = ({ onSubmit }) => {

    const [value, setValue] = useState('')

    const pressHendler = () => {
        onSubmit(value)
        setValue('')
    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder="Введите название дела"
                autoCorrect={false}
                autoCapitalize="none"
                />
            <Button 
                style={styles.button} 
                title="Добавить"
                onPress={pressHendler}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        borderStyle: 'solid',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        width: '80%',
    },
    button: {
    }
})