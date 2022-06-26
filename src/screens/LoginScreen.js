import React, { useContext, useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';

import { AuthContext } from '../context/AuthContext';
import P from '../organisms/P';

const LoginScreen = (navigation) => {


    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { loginFunction } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.nameapp}>
                    <Image source={require('../assets/images/movie.png')} style={{ width: 140, height: 140 }} />
                </View>

                <TextInput
                    style={styles.input}
                    value={email}
                    placeholder="Enter email"
                    onChangeText={text => setEmail(text)}
                />

                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Enter password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />

                <Button title="Login" onPress={() => { loginFunction(email, password) }} />

            </View>
        </View>
    )

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '80%',
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
    },
    link: {
        color: 'blue',
    },
    nameapp: {
        alignItems: 'center',
        marginBottom: 30
    }
});

export default LoginScreen;