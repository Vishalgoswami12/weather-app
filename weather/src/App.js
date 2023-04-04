import './App.css';
import React from "react";
import Form from './componenets/Form';
// import CityData from './componenets/CityData';


function App() {
  return (
    <div className="App">
      <div className='weatherbg'>
      <h1 className="heading">Weather App</h1>
      </div>
     
      <Form />
    </div>
  );
}

export default App;
