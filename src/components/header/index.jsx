/* eslint-disable padded-blocks */
import React, { useState } from 'react';

import Container from './styles';
import AcrosticWord from '../acrosticWord';

function Header() {
  const [textCompressed, setTextCompressed] = useState(true);
  console.log(setTextCompressed);

  const [suffix, setSuffix] = useState('ation');
  const [buttonText, setButtonText] = useState('DRY');

  const toggleSuffix = () => {
    if (suffix === 'ation') {
      setSuffix('+ suffix');
      setButtonText('suffix = "ation"');

    } else if (suffix === '+ suffix') {
      setSuffix('');
      setButtonText('Adds "ation" at the end of every word');
    } else {
      setSuffix('ation');
      setButtonText('DRY');
    }
  };

  return (
    <Container compressed={textCompressed}>

      <h2>
        I love
        {' '}
        <span id="preposition">{textCompressed && 'to'}</span>
      </h2>

      <div id="acrostic">

        <AcrosticWord suffix={suffix}>Communic</AcrosticWord>
        <AcrosticWord suffix={suffix}>Optimiz</AcrosticWord>
        <AcrosticWord suffix={suffix}>Document</AcrosticWord>
        {textCompressed && <p id="ind">ind</p>}
        <AcrosticWord suffix={suffix}>{textCompressed ? 'Ent' : 'Indent'}</AcrosticWord>
        {!textCompressed && (
          <>
            <AcrosticWord suffix={suffix}>Not</AcrosticWord>
            <AcrosticWord suffix={suffix}>Grad</AcrosticWord>
          </>
        )}

        <div id="canvas" />
      </div>

      <div id="button-container">

        <button
          type="button"
          id="dry"
          onClick={toggleSuffix}
        >
          {buttonText}
        </button>

      </div>

    </Container>
  );
}

export default Header;
