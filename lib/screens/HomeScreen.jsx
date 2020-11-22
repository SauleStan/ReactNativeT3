import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import AdComponent from '../components/AdComponent';

function HomeScreen({ navigation }) {

    const onMenuButtonPressed = () => navigation.openDrawer();

    return (
        <View style={styles.container}>
            <HeaderComponent title = "Ads" onPress={onMenuButtonPressed}/>
            <View style={styles.content}>
                <AdComponent/>
            </View>
        </View>
    );
}

export default HomeScreen;

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