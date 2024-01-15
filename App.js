import { SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Results from './components/Results'
import Buttons from './components/Buttons'
import Calculations from './components/Calculations'

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#1ae884'
    }}>
      <Results />
      <Calculations />
      <Buttons />
      <StatusBar hidden={true} />
    </SafeAreaView>
  )
}
