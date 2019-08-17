import styled from 'styled-components';

const AppStyled = styled.div`  

  h1 {
    text-align: center;
  }

  .main-wrapper {
    width: 550px;
    height: 680px;
    margin: auto;
    border: blue 2px;
  }

  .button-wrapper {
    display: flex;
    flex-direction: row
  }

  .button {
    background: #ffffff;
    color: black;
    border-radius: 15px 15px 0px 0px;
    border: 2px solid black;
    cursor: pointer;
    text-align: center;
    transition: all 0.4s ease 0s;
    margin-top: 10px;
    flex-grow: 1;
  }

  .buttonDeleteAll {
    background: #ffffff;
    border: 2px solid black;
    cursor: pointer;
    text-align: center;
    margin-top: 15px;
  }

  .button:hover {
    color: #ffffff !important;
    background: #80b3ff;
    border-color: #80b3ff !important;
    transition: all 0.4s ease 0s;
    }
`

export default AppStyled;