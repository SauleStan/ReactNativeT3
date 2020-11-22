import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default function ButtonComponent ({onPress}) {
    return(
        <TouchableOpacity onPress = {onPress} style={styles.button}>
            <Text style={styles.text}>Create</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        height: 40,
        width: "50%",
        backgroundColor: 'yellow',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: "bold",
        color: "black"
    }
})