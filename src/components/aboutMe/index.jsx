import React from 'react';
import { GiJellyBeans } from 'react-icons/gi';
import {
  SiXbox, SiDocker, SiTypescript, SiPostgresql,
} from 'react-icons/si';
import { RiBracesFill, RiMusic2Line } from 'react-icons/ri';
import imgUrl from '../../images/foto-de-perfil.jpeg';

import Container from './styles';

function AboutMe() {
  return (
    <Container>

      <h2>
        About me:
      </h2>

      <div>
        <img alt="Paulo David, the creater of this portfolio" src={imgUrl} />

        <ul>
          <li>
            Current learning:

            <ul>
              <li>
                <SiDocker />
                &nbsp;
                Docker
              </li>
              <li>
                <SiPostgresql />
                &nbsp;
                Postgresql
              </li>
              <li>
                <SiTypescript />
                &nbsp;
                Typescript
              </li>
              <li>
                <RiBracesFill />
                &nbsp;
                TypeORM
              </li>
            </ul>
          </li>

          <li>
            Proficient in: HTML, CSS, Javascript, React, C
          </li>

          <li>
            Current studing at Kenzie Academy Brasil
          </li>

          <li>
            I&apos;m passionate about:

            {/* the names are links */}
            <ul>
              <li>
                <SiXbox />
                &nbsp;
                Gaming
              </li>

              <li>
                <GiJellyBeans />
                &nbsp;
                Feijão tropeiro
              </li>

              <li>
                <RiMusic2Line />
                &nbsp;
                Songs from
                {' '}
                <a href="https://www.youtube.com/c/ooo0eve0ooo" target="_blank" rel="noreferrer">Eve</a>
                ,
                {' '}
                <a href="https://www.youtube.com/channel/UCEuOwB9vSL1oPKGNdONB4ig" target="_blank" rel="noreferrer">RHCP</a>
                {' '}
                and
                {' '}
                <a href="https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA" target="_blank" rel="noreferrer">Imagine Dragons</a>
              </li>
            </ul>
          </li>

        </ul>
      </div>

    </Container>
  );
}

export default AboutMe;
