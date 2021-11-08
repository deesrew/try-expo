import React from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import {AddToDo} from "../components/AddToDo";
import { ToDo } from "../components/ToDo";

export const MainScreen = ({ addToDo, toDos, removeToDo, openToDo }) => {

    let content = (
            <FlatList 
                keyExtractor={item => item.id.toString()}
                data={toDos}
                renderItem={({item}) => (
                    <ToDo 
                        todo={item} 
                        onRemove={removeToDo}
                        onOpen={openToDo}
                    />
                )}
            />
    )

    if (toDos.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image
                    style={styles.image}
                    source={require('../../assets/сlear.png')}
                />
            </View>
        )
    }

    return (
        <View>

            <AddToDo onSubmit={addToDo} />
            {content}

        </View>
    )
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 200,
        height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
})
