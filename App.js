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
    setResultText(eval(calcText));
  }

  const onButtonClick = (number) => {
    let operations = ["DEL", "AC", "/", "*", "-", "+"];
    if (number == '=') {
      if (operations.includes(calcText.toString().split("").pop())) return;
      return Calculation();
    }
    else {
      setCalcText(calcText + number);
    }
  }

  const onOperationClick = (text) => {
    console.log(text);
    if (text == 'AC') {
      setCalcText("");
      setResultText(0);
      return;
    }
    if (text == 'DEL') {
      return setCalcText(calcText.toString().substring(0, calcText.length - 1));
    }
    setCalcText(calcText + text);
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
