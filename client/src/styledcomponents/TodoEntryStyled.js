import styled from 'styled-components';

const TodoEntryStyled = styled.div`
  .wrapper-entry {
    border-top: 1px solid blue;
    border-left: 4px solid red;
    border-right: 2px solid black;
    border-bottom: 1px solid blue; 
    width: 100%;
    height: auto;
    display: incline-block;
    box-sizing: border-box;
  }

  .normal {
    font-size: 22px;
    margin: 3px;
  }

  .red {
    font-size: 22px;
    margin: 3px;
    color: red;
  }
`

export default TodoEntryStyled;