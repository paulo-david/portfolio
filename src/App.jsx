import './App.css';
import React from 'react';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Header from './components/header';

function App() {
  return (
    <div className="App">

      <h1>
        Hi, I&apos;m Paulo David,
        <br />
        front-end developer and
      </h1>

      <Header />

      <AboutMe />
      <Projects />

    </div>
  );
}

export default App;
