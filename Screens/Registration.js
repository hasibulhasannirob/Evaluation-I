
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AccountImage from "../assets/create_account.png";

const Registration = () => {

    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = () => {

        console.log('Registration data:', { username, email, password });
    };
    return (
        <View style={styles.container}>
            <Image
                source={AccountImage}
                style={{ marginBottom: 20, }}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate("Ecommerce")}
            >
                <Text style={styles.signup}>SIGN UP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.haveAccount}>
                <Text>Already have an account? </Text>
                <Text style={{ color: "#922fd4", fontWeight: "bold", }}
                    onPress={() => navigation.navigate("Home")}
                >Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Registration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: 290,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    signup: {
        color: 'white',
        fontWeight: "bold",
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#922fd4',
        padding: 10,
        width: 290,
        height: 40,
        borderRadius: 5,

    },
    haveAccount: {
        flexDirection: "row",
        marginTop: 5,
    }
})