import styled from 'styled-components'

export const Input = styled.input`
  border: black;
  border-bottom: 1px solid;
  border-radius: '5px';
  height: 46px;
  width: 100%;
  min-width: 0px;
  position: relative;
  padding: 0 10px;
  background-color: white;

  :hover {
    color: red;
  }

  &:focus {
    border: '2px solid';
    border-bottom: 2px solid;
    outline-style: none;
    box-shadow: none;
    background-color: white;
    color: grey;
  }

  &:disabled {
    opacity: 0.4;
    border-color: grey;
    cursor: not-allowed;
    color: grey;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }
`
