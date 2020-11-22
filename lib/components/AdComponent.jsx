import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AdComponent () {
    return(
        <View style={styles.AdContainer}>
            {/* Title */}
            <View>
                <Text style={styles.AdText}>Title</Text>
            </View>
            {/* ad image? */}
            {/* Ad description? */}
            {/* poster's info? */}

        </View>
    );
}

const styles = StyleSheet.create({
    AdContainer: {
        width: "90%",
        height: 40,
        borderWidth: 1,
        margin: 10,
    },
    AdText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        // textAlign: 'left',
        padding: 5,
    }

})