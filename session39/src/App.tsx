import React, { useCallback, useState } from 'react'
import UseRef from './components/UseRef';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  const [active,setActive]=useState<boolean>(false);
  const [count,setCount]=useState<number>(0);
  const handleClick=()=>{
    setActive(!active);
    setCount(count+1);
  }
  const result = useCallback(()=>{
    const getIdProduct =()=>{
      console.log('hih');
    }
    return getIdProduct
  },[]);
  // console.log('conponent app re-render khi click');
  return (
    <div>
      {active ? <p>xin chào</p> : ''}
      <UseRef></UseRef>
      <Header count={count}></Header>
      <Main getIdProduct={result}></Main>
      <button onClick={handleClick}>click active</button>
    </div>
  )
}