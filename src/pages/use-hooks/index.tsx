import React, { createContext, useReducer } from 'react'
import Navbar from './components/navbar'
import useAccount from 'hooks/account'

interface Action {
  type: string;
}

interface State {
  age: number;
  name: string;
}

const reducer = (state: State, action: Action) => {
  switch(action.type)  {
    case('ageUp'):
      return  {
        ...state,
        age: state.age + 1
      }
    default:
      return  state;
  }
}

const initialState: State = {
  age: 0,
  name: ''
}

// 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。
export const AppContext = createContext(initialState)

// 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层以及任何 return 之前调用他们。
const Hooks: React.FC = () => {
const [state, dispatch] = useReducer(reducer, initialState);
const [loading, account] = useAccount(3000)

  return (
    <AppContext.Provider value={{name: 'John', age: 0}}>
      <div>
        <Navbar />
        <div>{state.age}</div>
        <button onClick={() => dispatch({ type: 'ageUp' })}>
        +1
      </button>
      <div>{loading ? "稍等……" : account.name}</div>
      </div>
    </AppContext.Provider>
  )
}

export default Hooks