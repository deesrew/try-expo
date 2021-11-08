import React, {useState} from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";

export const ToDoScreen = ({ goBack, toDo, onRemove, onSave }) => {

    const [modal, setModal] = useState(false)

    const saveHandler = title => {
        onSave(toDo.id, title)
        setModal(false)
    }

    return (
        <View>

            <EditModal
                value={toDo.title}
                visible={modal}
                onCancel={() => setModal(false)}
                onSave={saveHandler}
            />

            <AppCard style={styles.card}>
                <Text style={styles.title}>
                    {toDo.title}
                </Text>
                <Button
                    title='Edit'
                    onPress={() => setModal(true)}
                />
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button 
                        title="Go Back"
                        color={THEME.GRAY_COLOR}
                        onPress={goBack}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Delete"
                        color={THEME.DANDER_COLOR}
                        onPress={() => onRemove(toDo.id)}
                    />
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '40%',
    },
    title: {
        fontSize: 26,
    },
    card: {
        marginBottom: 20,
    }
})
