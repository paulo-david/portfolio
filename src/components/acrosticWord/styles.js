import styled from 'styled-components';

export default styled.p`

  color: var(--lightBlue);
  font-size: 1.1em;
  font-weight: 500;
  font-family: "Courier New";
  
  margin: 10px 0px;

  ::first-letter{
    font-weight: bold;
    letter-spacing: 8px;
  }
  
  .suffix{
    color: var(--yellow);
  }
`;
