import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import NewAd from '../components/NewAd';

export default function NewAdScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderComponent title="New Ad" onPress={() => navigation.openDrawer()} />
            <View style={styles.content}>
                <NewAd />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'green',
    },
    content: {
        backgroundColor: 'pink',
        alignItems: 'center'
    }
});