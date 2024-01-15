import { View, Text } from 'react-native'
import React from 'react'

const Calculations = () => {
  return (
    <View style={{
        flex:1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    }}>
        <Text style={{
            fontSize:30,
            display:'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginEnd:20,
            color:'#666'
        }}>333/2</Text>
    </View>
  )
}

export default Calculations