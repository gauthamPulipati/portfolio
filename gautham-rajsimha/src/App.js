import './App.css';
import Container from '@mui/material/Container';
import Navigation from './Components/Util/Navigation';
import React, { useState } from 'react';
import About from './Components/About/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Footer from './Components/Util/Footer';


function resolvebody(value) {
  switch (value) {
    case 0:
      return <About />
    case 1:
      return <Skills />
    case 2:
      return <Work />
    case 3:
      return <Contact />
  }
}

function App() {
  const [selectedtab, setSelectedtab] = useState(0)
  const assignSelected = (value) => {
    setSelectedtab(value)
  }

  return (
    <React.Fragment>
      <Navigation assignSelected={assignSelected} />
      <div style={{ color: 'black', height: '16px', visibility: 'hidden' }}>{selectedtab}</div>
      <Container maxWidth="lg" style={{ backgroundColor: '#02ffff', backgroundImage: 'linear-gradient(to right, #027777, #02ffff, #027777)' }}>
        {resolvebody(selectedtab)}
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default App;
