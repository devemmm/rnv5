import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BookmarkScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BookmarkScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default BookmarkScreen