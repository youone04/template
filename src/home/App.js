import React ,{Fragment} from 'react';
// import logo from '../logo.svg';
import './App.css';
import MenuNavbar from '../component/menu-bar';
import About from '../containers/pages/about';
import HalamanUtama from '../containers/pages/halaman_utama';
import Kontak from '../containers/pages/kontak';
import NavbarMobile from '../component/navbar-mobile';
import { Footer } from '../component/atom';

function App() {
  return (

      <Fragment>
          <MenuNavbar/>
          <HalamanUtama />
          <About/>
          <Kontak />
          <Footer />
          <NavbarMobile />
      </Fragment>
  );
}
export default App;
