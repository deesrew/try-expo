import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal, Alert } from "react-native";
import { THEME } from "../theme";

export const EditModal = ({ visible, onCancel, value, onSave }) => {

    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Error!', 'Min lenght of name is 3 simvols. Now ' + title.trim().length + ' simvols')
        } else {
            onSave(title)
        }
    }

    return (
        <Modal 
            visible={visible}
            animationType="fade"
            transparent={false}
        >
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder="Write a title"
                    autoCapitalize="none"
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button 
                        title='Cancel'
                        onPress={onCancel}
                        color={THEME.DANDER_COLOR}
                    />
                    <Button
                        title='Save'
                        onPress={saveHandler}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%',
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})