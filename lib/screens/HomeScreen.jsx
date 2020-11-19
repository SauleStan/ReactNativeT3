import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';


function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <HeaderComponent title = "Ads" onPress={()=>navigation.openDrawer()}/>
            <View style={styles.content}>
                <Text>Home Screen</Text>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'green',
    },
    content: {
        backgroundColor: 'pink',
    }
});