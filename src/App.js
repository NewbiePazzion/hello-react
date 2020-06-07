import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js'
import List from './List';
import Top from './Top';
import Main from './Main';
import Form from './components/home/Form';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header list='10 Daftar Makanan' />
        <Top />
        <Form />
        <Main />
        <h1>Hello World</h1>
        <h1>Component dari Class App</h1>
        <List />
        <Footer judul='Halaman Footer' nama='Aufa Billah' />
      </div>
    );
  }
}
// function App() {
  // return <h1>Hello World</h1>
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }

export default App;
