import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiStyledcomponents,
} from 'react-icons/si';

import React from 'react';
import Container from './styles';
import connect4 from '../../images/connect4-print.png';

function Projects() {
  return (
    <Container>

      <h2>Projects</h2>

      <div className="project-card">

        <h3>
          Connect 4
        </h3>
        <img src={connect4} alt="Print from the project/game: connect 4" />

        <div className="project-card-info">

          <section className="tech-list">

            <p className="tag-tech">
              <SiHtml5 />
              &nbsp;
              HTML
            </p>
            <p className="tag-tech">
              <SiCss3 />
              &nbsp;
              CSS
            </p>
            <p className="tag-tech">
              <SiJavascript />
              &nbsp;
              Javascript
            </p>
            <p className="tag-tech">
              <SiReact />
              &nbsp;
              React
            </p>
            <p className="tag-tech">
              <SiStyledcomponents />
              &nbsp;
              Styled-components
            </p>
          </section>

          <p>
            Two players alternate placing balls in the columns,
            the first to create a sequence of 4 wins
            ( either horizontally, vertically or diagonally ).
          </p>

          {/* Paragraph about What I learned */}

          <a href="https://connect-4-six.vercel.app/" target="_blank" rel="noreferrer">Try on</a>
          <a href="https://github.com/paulo-david/connect4" target="_blank" rel="noreferrer">Repository</a>

        </div>
      </div>
    </Container>
  );
}

export default Projects;
