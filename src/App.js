import { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Test from './components/Test/Test';
import Test2 from './components/Test2/Test2';

function App() {
  const [count, setCount] = useState(0);
  function handleAdd(){
    setCount(count+1);
   }
   function handleMinus(){
    setCount (count-1);
   }
  
  return (
    <div className="App">
      {/* <Test></Test>
      <Test2></Test2> */}
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <Counter
        count = {count}
        handleAdd = {handleAdd}
        handleMinus = {handleMinus}
      ></Counter>

    </div>
  );
}


export default App;
