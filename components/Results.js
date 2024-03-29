import { View, Text, Dimensions } from 'react-native'
import React from 'react'

const Results = ({ resultText }) => {
  return (
    <View style={{
      flex: 2,
      width: '100%',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }}>
      <Text style={{
        fontSize: 100,
        marginEnd: 20,
        color: '#333'
      }}>{resultText}</Text>
    </View>
  )
}

export default Results