import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Keyboard } from 'react-native';

import ButtonComponent from './ButtonComponent';

export default function NewAd() {

    const [title, onTitleChange] = useState('Add a title');
    const [description, onDescriptionChange] = useState('Add description');

    return (
        <View style={styles.adContainer}>
            <TextInput
                style={styles.titleInput}
                onTitleChange={text => onTitleChange(text)}
                title={title}
                placeholder="Title"
                maxLength={20}
            />
            {/* Image input? */}
            {/* Description input */}
            <TextInput
                style={styles.descriptionInput}
                onDescriptionChange={text => onDescriptionChange(text)}
                description={description}
                placeholder="Description"
                multiline={true}
            />
            <View style={styles.buttonArea}>
                <ButtonComponent />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    adContainer: {
        width: "90%",
        // height: 40,
        margin: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: 'left',
        padding: 5,
    },
    titleInput: {
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        borderWidth: 1,
        marginBottom: 10,
    },
    descriptionInput: {
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20,
        height: 200,
        borderWidth: 1,
    },
    buttonArea: {
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
    }

})