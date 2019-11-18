import React from 'react';
import logo from './logo.svg';
import './App.css';
import Route from "./router"
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store={store} className="App">
      <header className="App-header">
        <Route />
      </header>
    </Provider>
  );
}

export default App;
