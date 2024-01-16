import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Calculations = ({calcText}) => {
  return (
    <View style={{
        flex:1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    }}>
      <Text style={{
        fontSize: 40,
        marginEnd: 20,
        color: '#333'
      }}>{calcText}</Text>
    </View>
  )
}

export default Calculations