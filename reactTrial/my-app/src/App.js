// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

// function App() {
//   let [currentDate, setCurrentDate ] = useState(new Date());
//   console.log(currentDate);
//   return (
//     <div className="App">
//       <h1> This is a test</h1>

//       {JSON.stringify(currentDate)}
//       <button onClick={() => setCurrentDate(new Date())}> Click Me </button>
//     </div>
//   );
// }

function App() {
  let [currentNum, setCurrentNum ] = useState(1);
  // console.log(currentNum);
  return (
    <div className="App">
      <h1>Look at my nums</h1>
      <button onClick={() => setCurrentNum(++currentNum)}>{currentNum}</button>
    </div>
  );
}

export default App;
