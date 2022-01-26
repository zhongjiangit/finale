import React, { useState, useEffect, Fragment } from 'react'
import TemperatureInput from './components/temperature-input'
import BoilingVerdict from './components/boiling-verdict'
import { tryConvert, toCelsius, toFahrenheit } from 'helper'

/* 状态提升，就是将改变状态的方法传入子组件 */
const Calculator = () => {
  const [temperature, setTemperature] = useState('')
  const [scale, setScale] = useState('c')
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')

  const handleCelsiusChange = (temperature: string) => {
    setTemperature(temperature)
    setScale('c')
  }

  const handleFahrenheitChange = (temperature: string) => {
    setTemperature(temperature)
    setScale('f')
  }

  useEffect(() => {
    switch (scale) {
      case 'f':
        setCelsius(tryConvert(temperature, toCelsius))
        setFahrenheit(temperature)
        break;
      case 'c':
        setFahrenheit(tryConvert(temperature, toFahrenheit))
        setCelsius(temperature)
        break;
      default:
        break;
    }
  }, [scale, temperature])

  // Fragment 当你不需要在 fragment 标签中添加任何 prop 且你的工具支持的时候，你可以使用 短语法：<></>
  // 这很好的解决了table子元素渲染等问题
  return (
    <Fragment>
       <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
    </Fragment>
  )
}

export default Calculator