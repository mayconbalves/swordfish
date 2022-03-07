import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 5%;
  width: 90%;
  @media (max-width: 599px) {
    display: flex;
  }

  @media (min-width: 600px) {
    display: flex;
  }
`

export const TitleContainer = styled.div`
  display: flex;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Alert = styled.p`
  color: ${(props) => props.color};
`

export const List = styled.ul`
  color: red;
  margin: 0 20px;
`

export const ButtonContainer = styled.div`
  bottom: 5%;
  position: absolute;
  display: flex;
  flex-direction: column;
`
