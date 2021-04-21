import './App.css';
import { Component } from 'react';
import Main from '../Main'

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tv Series Filter</h1>        
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
