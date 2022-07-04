import styled from 'styled-components';

export default styled.div`

  height: 200px;

  display: flex;
  justify-content: space-around;

  h2{
    width: 125px;
  }

  #acrostic{

    width: 200px;
    position: relative;

    #ind{
      color: var(--lightBlue);
      font-size: 1.1em;
      font-weight: 500;
      font-family: "Courier New";

      position: absolute;
      top: 81px;
      right: 208px;
    }

    #canvas{
      
      width: 16px;
      /* height: 120px; */
      /* height: 180px; */
      height: ${(props) => (props.compressed ? '120' : '180')}px;
      
      border: 3px solid var(--lightBlue);
      border-radius: 7px;

      position: absolute;
      top:  0px;
      left: -5px;
    }
  }

  #button-container{
    width: 300px;
  }

  #dry{
    color: var(--yellow);
    font-size: 1.3em;
    font-weight: bold;

    height: fit-content;
    background-color: white;
    position: relative;

    margin-top: 110px;

    border: 0;
    border-radius: 7px;

    padding: 3px 7px;
    box-shadow: 3px 6px;

    :hover{
      top: 2px;
      left: 1px;
      box-shadow: 2px 4px;
      cursor: pointer;
    }
  }
`;
