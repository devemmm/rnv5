import React from 'react'
import { View, Text,Button,  StyleSheet } from 'react-native'

const DetailScreen = ({ navigation }) => {
    return (
        <View style={styles.conatiner}>
            <Text>DetailScreen</Text>
            <Button
                title='Go to details screen ...again'
                onPress={() => navigation.push("Details")}
            />
            <Button
                title='Go to Home'
                onPress={() => navigation.navigate("Home")}
            />
            <Button
                title='Go back'
                onPress={() => navigation.goBack()}
            />

            <Button
                title='Go to the first screen'
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default DetailScreen