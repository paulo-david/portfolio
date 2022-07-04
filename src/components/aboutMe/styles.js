import styled from 'styled-components';

export default styled.div`

  h2 {
    margin-left: 27%;
  }
  
  div{
    
    display: flex;
    align-items: center;
    justify-content: center;

    li{
      margin-bottom: 5px;
    }

    @media (max-width:475px){
      flex-direction: column;
    }
  }

  img{
    width: 30%;
    height: 30%;
    max-width: 300px;
    max-height: 300px;

    border-radius: 50%;
    margin-right: 40px;
  }
`;
