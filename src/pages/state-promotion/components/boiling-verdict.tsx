import React from 'react'

interface BProps {
  celsius: number;
}

function BoilingVerdict(props: BProps) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export default BoilingVerdict