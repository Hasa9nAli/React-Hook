# React-Hook

### Rules of Hook 
--------------------------
##### "Only call Hook at the top level"
    - Don't call Hook inside loops , conditions , or nested functions

##### "Only call Hook from React Functions"
    - call them from within react functional component and not just anu regular javascript  function 

##### in the file of simpleProject
    - there is sub program to remove the element using filtering element when clicked the the X button 


### useState() 
    - const [state , setState] = useState('initial value')
    state = > the current state 
    setState => method to make setState 
### LifeCycle And State
the react is work with the form in two ways 

###### Control Component
    happening manage in this form to take the data to save this data in the state 
    ... 
     is one that takes its current value through - props 
     and notifies changes through callbacks like - onChange.
      A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".

###### UnControl Component 
   is one that stores its own state internally, and you query the DOM using a - ref 
   to find its current value when you need it. This is a bit more like traditional HTML