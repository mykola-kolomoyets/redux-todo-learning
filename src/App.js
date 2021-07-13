import React from 'react';
import Footer from './features/footer/Footer';
import Header from './features/header/Header';

function App() {
  return (
    <div className="App">
      
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>Welcome to the Redux Fundamentals example app!</h2>
      </section>
      <Header />
    <Footer />
    </div>
  )
}

export default App
