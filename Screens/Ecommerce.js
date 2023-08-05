import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Tide from "../assets/tide.png";

const Ecommerce = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 50, }}>Ecommerce</Text>
            </View>
            <View style={{ alignItems: "center", width: 300, height: 150, backgroundColor: "#bdfced", borderRadius: 5, flexDirection: "row", padding: 15 }}>
                <View style={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Image
                        source={Tide}
                        style={{ width: 100, height: 100, }}
                    />
                </View>
                <View style={{ marginLeft: 10, }}>
                    <Text>Tide Powder</Text>
                    <Text>Washing Powder</Text>
                    <Text>800gm</Text>
                    <TouchableOpacity>
                        <Text>Add To Bag</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Ecommerce

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})