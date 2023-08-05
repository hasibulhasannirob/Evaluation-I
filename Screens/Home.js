import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { SafeAreaView, } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View>

                <TextInput
                    style={styles.input}
                    placeholder="Email"


                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"

                    secureTextEntry
                />
                <View>
                    <Button title="Login" onPress={() => navigation.navigate("Registration")} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    inputContainer: {
        display: 'flex',
        margin: 10,

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
})