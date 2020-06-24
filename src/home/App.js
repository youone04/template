import React ,{Fragment} from 'react';
// import logo from '../logo.svg';
import './App.css';
import MenuNavbar from '../component/menu-bar';
import About from '../containers/pages/about';
import HalamanUtama from '../containers/pages/halaman_utama';

function App() {
  return (

      <Fragment>
          <MenuNavbar/>
          <HalamanUtama />
          <About/>
      </Fragment>
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
  );
}
export default App;
