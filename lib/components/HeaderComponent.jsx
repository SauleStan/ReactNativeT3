import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function HeaderComponent(){
    return(
        <View style={styles.header}>
            <Icon 
                style={{flex:1}}
                name='menu'
                onPress={() => { console.log('button pressed')}}
            />
            <View style={{flex: 2}}>
                <Text style={styles.headerText}>Title</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1,
        textAlign: 'center'
    }
})