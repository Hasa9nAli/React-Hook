import React from 'react';
import './App.css';
import ButtonToAddCount from './useStateHook/buttonToAddCount.component';
import ButtonAddSubRes from './useStateHook/buttonAddSubRes.component';
import UseStateWithObject from './useStateHook/useStateWithObject.component';
import Main from './simpleProject/componentOfSimpleProject/main.component';
import UseEffectHookCounter from './useEffectHook/useEffectHookCounter.component';
import UseEffectInput from './useEffectHook/useEffectInput.component';
import MouseHook from './useEffectHook/mouseHook'
import MouseContainer from './useEffectHook/mouseComtainer.component';

function App() {
  return (
    <div className="App">
      {/* i pause the component of setStateHook File*/}
      {/* <ButtonToAddCount />
      <ButtonAddSubRes />
      <UseStateWithObject /> */}
      {/* <Main/> */}
      {/* <UseEffectHookCounter/>
      <UseEffectInput/>
      <MouseHook/> */}
      <MouseContainer/>
    </div>
  );
}

export default App;
