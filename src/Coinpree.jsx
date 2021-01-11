import React from 'react';
import styles from './Coinpree.module.scss';
import Header from './components/Header/Header';
import Converter from './components/Converter/Converter';
// import Footer from './components/Footer/Footer';

function Coinpree() {
  return (
    <div className={styles.mainBody}>
      <Header />
      <Converter />
    </div>
  );
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
}

export default Coinpree;
