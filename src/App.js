import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './components/Banner';
import Feed from './components/Feedback';
import Footer from './components/Footer';
import FAQ from './components/Faq';
import WhatweOffer from './components/WhatWeOffer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Team from './components/Team/Team';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import TeamSection from './components/Team';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Banner />
        <About />
        <WhatweOffer />

        {/* <Feed /> */}
        <FAQ />
        {/* <Team /> */}
        <TeamSection/>
        <Contact />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
