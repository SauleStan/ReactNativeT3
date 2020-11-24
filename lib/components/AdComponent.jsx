import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AdComponent({ adData }) {

    
    return (
        <View style={styles.adContainer}>
            {/* Title */}
            <View style={styles.adTextArea}>
                <Text style={styles.adText}>{ adData.title }</Text>
            </View>
            {/* ad image? */}
            {/* Ad description? */}
            <View>
                <Text style={styles.adDescription}>{ adData.description }</Text>
            </View>
            {/* poster's info? aka footer*/}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Owner: { adData.owner }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    adContainer: {
        width: "90%",
        // height: 40,
        borderWidth: 2,
        margin: 10,
        backgroundColor: 'yellow',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    adText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: 'center',
        padding: 5,
    },
    adTextArea: {
        borderBottomWidth: 1,
    },
    adDescription: {
        padding: 5,
    },
    footer: {
        borderTopWidth: 0.8,
        padding: 5,
    },
    footerText: {
        // backgroundColor: 'pink',
        marginLeft: 20,
        width: "90%"
    }


})