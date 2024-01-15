import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Calculations = () => {
  return (
    <View style={{
        flex:1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    }}>
      <TextInput style={{
        fontSize:40,
        color:'#666',
        marginEnd:20
      }} value='23+43'/>
    </View>
  )
}

export default Calculations