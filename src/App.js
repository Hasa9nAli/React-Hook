import React from 'react';
import './App.css';
import ButtonToAddCount from './useStateHook/buttonToAddCount.component';
import ButtonAddSubRes from './useStateHook/buttonAddSubRes.component';
import UseStateWithObject from './useStateHook/useStateWithObject.component';
import Main from './simpleProject/componentOfSimpleProject/main.component';
import UseEffectHookCounter from './useEffectHook/useEffectHookCounter.component';


function App() {
  return (
    <div className="App">
      {/* i pause the component of setStateHook File*/}
      {/* <ButtonToAddCount />
      <ButtonAddSubRes />
      <UseStateWithObject /> */}
      {/* <Main/> */}
      <UseEffectHookCounter/>
    </div>
  );
}

export default App;
