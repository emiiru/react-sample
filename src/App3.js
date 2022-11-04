
import './App.css';
import { useState } from 'react';


function App() {

    const inputChange = (event) => {
        setText(event.target.value);
        console.log(event.target.value);
    };
    const [text, setText] = useState("");



    const [age, setAge] = useState(0);
    const increaseAge = () => {
        setAge(age + 1);
        console.log(age);
    };

    const decreaseAge = () => {
        setAge(age - 1);
        console.log(age);
    };

    const zeroAge = () => {
        setAge(0);
        console.log(age);
    };
  return (
    <div className="App">
      <button onClick={increaseAge}>Increase</button>
      <button onClick={decreaseAge}>Decrease</button>
      <button onClick={zeroAge}>Set to Zero</button>
      <h1>{age}</h1>
      {/* <input type="text" onChange={inputChange} /> */}
      <br/>
      {text}
    </div>
  );

}




export default App;
