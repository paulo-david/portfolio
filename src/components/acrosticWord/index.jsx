/* eslint-disable react/prop-types */
import React from 'react';
import Container from './styles';

function AcrosticWord({ children, suffix }) {
  return (
    <Container>
      {children}
      <span className="suffix">{suffix}</span>
    </Container>
  );
}

export default AcrosticWord;
