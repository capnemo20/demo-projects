import './App.css';
import Counter from './components/Counter/Counter';
import Test from './components/Test/Test';
import Test2 from './components/Test2/Test2';

function App() {
  const myObj = {
    name:"jeff",
    author: "kinney"
  }
  return (
    <div className="App">
     <Test name = "kiddo"></Test>
     <Counter></Counter>
     <Greet name = {myObj.name} author = {myObj.author}></Greet>
    </div>
  );
}

function Greet(props){
    console.log(props);
    const {name, author} = props;
    return(
      <div>
        <h1>{`my name is ${name} author name is ${author}`}</h1>
      </div>
    )
}

export default App;
