import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AdComponent() {
    return (
        <View style={styles.adContainer}>
            {/* Title */}
            <View style={styles.adTextArea}>
                <Text style={styles.adText}>Title</Text>
            </View>
            {/* ad image? */}
            {/* Ad description? */}
            <View>
                <Text style={styles.adDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
            {/* poster's info? aka footer*/}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Owner: A lil bitchass</Text>
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

    },
    footerText: {
        // backgroundColor: 'pink',
        marginLeft: 20,
        width: "90%"
    }


})