import './App.css';
import Header from './components/Header'
import React, {useState} from 'react'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage] = useState('About');
  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage}/>
      <div id='main'>
      { currentPage === 'Portfolio' && <Portfolio /> }
      { currentPage === 'About' && <About /> }
      { currentPage === 'Contact' && <Contact /> }
      { currentPage === 'Resume' && <Resume /> }
      </div>
      <Footer />
    </div>
  );
}

export default App;
