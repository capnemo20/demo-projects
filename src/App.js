import { useState } from 'react';
import './App.css';
import AllGuns from './components/AllGuns/AllGuns';
import Counter from './components/Counter/Counter';
import Navbar from './components/Navbar/Navbar';
import Test from './components/Test/Test';
import Test2 from './components/Test2/Test2';

function App() {
  const [count, setCount] = useState(0);
  
  const countIncrease = ()=>{
    setCount(count+1);
  }

  return (
    <div className="App">
    <Navbar count={count}></Navbar>
    <AllGuns countIncrease ={countIncrease } ></AllGuns>

    </div>
  );
}


export default App;
