import './App.css';
import React from 'react';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Header from './components/header';

function App() {
  return (
    <div className="App">

      <h1>
        Hi, I&apos;m Paulo David, front-end developer aspiring to become a full-stack developer
      </h1>

      <Header />

      <AboutMe />
      <Projects />

    </div>
  );
}

export default App;
