import React from 'react';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import AdComponent from '../components/AdComponent';

const sampleData = [
    {
        id: "1",
        title: "Ad1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        owner: "A lil bitchass",
    },
    {
        id: "2",
        title: "Ad2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        owner: "A lil bitchass again",
    },
    {
        id: "3",
        title: "Ad3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        owner: "Yo mama",
    },
    {
        id: "4",
        title: "Ad4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        owner: "):",
    }
];

export default function HomeScreen({ navigation }) {
    const renderAd = ({ item }) => (
        <AdComponent adData={item} />
    )

    return (
        <View style={styles.container}>
            <HeaderComponent title="Ads" onPress={() => navigation.openDrawer()} />
            <View style={styles.content}>
                <FlatList
                    contentContainerStyle={styles.contentContainer}
                    data={sampleData}
                    renderItem={renderAd}
                    keyExtractor={ad => ad.id}
                />
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
        backgroundColor: 'green',
    },
    content: {
        backgroundColor: 'pink',
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        paddingBottom: 80,
    }
});