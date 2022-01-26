import React from 'react'
import useClientRect from './hooks/useClientRect'

const useRef: React.FC = () => { 
  const [rect, ref] = useClientRect()
  return(
    <>
      <h1 ref={ref}>Hello, world</h1>
      {rect !== null &&
        <h2>The above header is {Math.round(rect.height)}px tall</h2>
      }
    </>
  )
}

export default useRef