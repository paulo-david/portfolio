import styled from 'styled-components';

export default styled.div`

  h2 {
    padding-left: 25px;
  }

  .project-card {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    h3{
      padding-left: 50px;
      width: 100%;
    }

    img{
      width: 40%;

      @media (max-width:1024px){
        width: 70%;
      }
    }

    .project-card-info{

      width: 47%;

      .tech-list{

        display: flex;
        justify-content: space-between;
        
        .tag-tech{
          
          display: flex;
          align-items: center;

          line-height: 30px;
          
          border-radius: 7px;
          border: 2px solid black;

          padding: 0px 4px;
        }
      }

      a{
        color: black;
        line-height: 30px;
        text-decoration: none;


        border-radius: 7px;
        border: 2px solid black;

        padding: 0px 4px;
        box-shadow: 3px 7px;

        margin-right: 30px;

        position: relative;
        :hover{
          top: 2px;
          left: 2px;
          box-shadow: 1px 5px;
        }

      }

      @media (max-width:1024px){
        width: 65%;
      }
    }
  }
`;
