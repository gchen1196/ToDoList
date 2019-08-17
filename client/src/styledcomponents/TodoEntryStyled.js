import styled from 'styled-components';

const TodoEntryStyled = styled.div`
  .wrapper-entry {
    border-top: 1px solid blue;
    border-left: 4px solid red;
    border-right: 2px solid black;
    border-bottom: 1px solid blue; 
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
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

  .removeButton {
    width: 13px;
    height: 100%;
    border: 1px solid black;
    color: white;
    background: red;
    border-radius: 5px;
    margin-left: auto;
    cursor: pointer
  }
`

export default TodoEntryStyled;