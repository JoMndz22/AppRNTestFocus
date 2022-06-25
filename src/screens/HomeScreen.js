import React, { useContext } from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = (props) => {

    const { userInfo, loading, logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome {userInfo.email}</Text>
            <Button title="Logout" color="red" onPress={logout} />
        </View>
    )

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 18,
        marginBottom: 8,
    },
});

export default HomeScreen;