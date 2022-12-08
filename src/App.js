import React from 'react';
import "../src/App.css"
import Herosection from './components/Herosection';
import Menusection from './components/Menusection';
import Restaurents from './components/Restaurents';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
        <section className='completeapp'>
            <Herosection />
            <Menusection />
            <Restaurents />
            <Footer />
        </section>
      
    </React.Fragment>
  )
}

export default App