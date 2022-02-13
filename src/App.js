import {useState} from 'react';
import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
       <h1>{loggedIn ? 'Welcome Back!' : 'Please login.'}</h1>
        {loggedIn
        ?
        <button
        onClick={() => setLoggedIn(false)} > Logout </button>
        :
        <button
          onClick={() => setLoggedIn(true)}> Login </button>}
        <h1></h1>
      </header>
    </div>
  );
}

export default App;
