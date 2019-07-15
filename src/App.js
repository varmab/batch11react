import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Like from './Like'
import Todos from './Todos'
import Users from './Users'
import Library from './Library'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome title="Varma" password="122123213"/>
      </header>
      <Library/>
    </div>
  );
}

export default App;
