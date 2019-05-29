import React from 'react';
import Sheet from './characters/Sheet';

function App() {
  return (
    <div className="App">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            REACT STAR-WARS
          </a>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <Sheet />
        </div>
      </section>
    </div>
  );
}

export default App;
