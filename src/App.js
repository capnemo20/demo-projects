import './App.css';
import Counter from './components/Counter/Counter';
import Test from './components/Test/Test';
import Test2 from './components/Test2/Test2';

function App() {
  const names = ["sakib", "tamim", "rafiq"];
  
  return (
    <div className="App">
     
    {
      names.map(name=> (<Greet name = {name}></Greet>))
    }

    </div>
  );
}

function Greet(props){
    console.log(props);
    const {name} = props;
    return(
      <div>
        <h1>{`my name is ${name}`}</h1>
      </div>
    )
}

export default App;
