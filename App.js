import { SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Results from './components/Results'
import Buttons from './components/Buttons'
import Calculations from './components/Calculations'

export default function App() {
  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");
  const Calculation = () => {

  }

  const onButtonClick = (number) => {
    if (number == '=') {
      return Calculation();
    }
    else {
      setCalcText(calcText + number);
    }
  }

  const onOperationClick = (text) => {
    console.log(text);
    if (text == 'AC') {
      setResultText("");
      setCalcText(0);
    }
    else {
      setCalcText(calcText + text);
    }
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#1ae884'
    }}>
      <Results resultText={resultText} />
      <Calculations calcText={calcText} />
      <Buttons onButtonClick={onButtonClick} onOperationClick={onOperationClick} />
      <StatusBar hidden={true} />
    </SafeAreaView>
  )
}
