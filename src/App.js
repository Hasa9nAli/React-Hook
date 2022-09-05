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
import IntervalHook from './useEffectHook/intervalHook';
import DataFetching from './useEffectHook/dataFetching';
import ReducerTest from './useReducer/reducerTest';
import ComponentC from './useContext/componentC'
import ComponentW from './useContext/componentW'

export const UserContext = React.createContext()
export const ChanelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value = {"hello world"}>
        <ChanelContext.Provider value = {'chanel'}>
               <ComponentC></ComponentC>
        </ChanelContext.Provider>
      
      </UserContext.Provider>
      {/* i pause the component of setStateHook File*/}
      {/* <ButtonToAddCount />
      <ButtonAddSubRes />
      <UseStateWithObject /> */}
      {/* <Main/> */}
      {/* <UseEffectHookCounter/>
      <UseEffectInput/>
      <MouseHook/> */}
      {/* <MouseConStainer/>
      <IntervalHook/>
      <DataFetching/> */}
      <ReducerTest/>
    
    </div>
  );
}

export default App;
