import styled from 'styled-components'

export const Input = styled.input`
  border: 2px solid #000;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  background-color: white;

  &:focus {
    border: 2px solid #00f;
    outline-style: none;
    color: grey;
  }
`
