import React,{useContext, useState} from 'react'
import './App.css';

const CounterContext=React.createContext();

function CounterProvider({children}){
  const [count, setCount]=useState(0)

  const increment=()=>{
    setCount(count+37)
  }

const decrement=()=>{
  setCount(count-1)
}

const archement=()=>{
  setCount(count==0)
}


 const counterContextValue={
  count,
  increment,
  decrement,
  archement
 }
 return(
  <CounterContext.Provider value={counterContextValue}>
    {children}
  </CounterContext.Provider>
 )
}

function CounterDisplay(){
  const counterContext=useContext(CounterContext)

  return(
    <div>
    <p>Count:{counterContext.count}</p>
    <button onClick={counterContext.increment}>increment</button>
    <button onClick={counterContext.decrement}>decrement</button>
    <button onClick={counterContext.archement}>archement</button>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <CounterProvider>
        <CounterDisplay/>
      </CounterProvider>
    </div>
  );
}

export default App;
