import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        padding:10,
        width:"100%",
        minHeight:60,
        backgroundColor:"bisque"
    },
    text:{
        fontSize:25,
        textAlign:"center"
    }
})