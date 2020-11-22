import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'


export default function HeaderComponent({ title, onPress }) {
    return (
        <View style={styles.header}>
            <View style={styles.icon}>
                <Icon
                    name='menu'
                    onPress={onPress}
                />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        paddingTop: 20,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'coral',
        elevation: 2,
        // borderWidth: 1,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1,
        textAlign: 'center'
    },
    icon: {
        paddingLeft: 10,
    }
})