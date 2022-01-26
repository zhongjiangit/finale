import React from 'react'

const scaleNames: any = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

interface TProps {
  scale: string;
  temperature: string;
  onTemperatureChange: Function;
}

const TemperatureInput = (props: TProps) => {
  const { scale, temperature, onTemperatureChange } = props;

  const handleChange = (e: any) => {
    onTemperatureChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput