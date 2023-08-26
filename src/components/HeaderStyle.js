import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const HeaderLogo = () => {
  return (
    <Image
    style={{ width: 50, height: 50}}
    source={require('../../assets/reactLogo.png')}
  />
  )
}

export default HeaderLogo

const styles = StyleSheet.create({})