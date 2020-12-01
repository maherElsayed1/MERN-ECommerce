import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';



const App = () => {
  return (
    <>
      <Header />
      <Container>
        <main className="py-3">
          <h1>Hello MERN E-Commerce</h1>
        </main >
      </Container>


      <Footer />
    </>
  );
}

export default App;
