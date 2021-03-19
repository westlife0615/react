import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MovieList} from "./components/MovieList";
import {Parent} from "./RenderTreeTest/Parent";

function App() {
  return (
    <div className="App">
      {/*<MovieList/>*/}
      <Parent/>
    </div>
  );
}

export default App;
