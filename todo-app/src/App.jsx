import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  //  let c = 0;
const handleClick = (e) => {
  // c += 1;
  setCount(count+1);
  console.log("Button clicked",count);
  // console.log("button clicked" ,c);
}

  return <button onClick={ handleClick }>Click {count}</button>;
  
}

export default App
