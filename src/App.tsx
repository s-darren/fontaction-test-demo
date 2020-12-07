import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function testApi() {
  axios.post('http://127.0.0.1:3001', {
    url: 'http://127.0.0.1:3002/users/',
    method: 'POST',
    body: {
      id: 'sss'
    }
  })
}
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={testApi}>testApi</button>
        <form method="post" action="http://127.0.0.1:3002/users/" className="custom=form" target="_parent">
          <div className="custom-form-item">
            <label htmlFor="name">Enter your name:</label>
            <input id="name" name="name"></input>
          </div>
          {/* <div className="custom-form-item">
            <label htmlFor="file">Choose your file:</label>
            <input id="file" type="file" name="file"></input>
          </div> */}
          <div className="custom-form-submit-item">
            <button className="custom-submit-button" type="submit">submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
