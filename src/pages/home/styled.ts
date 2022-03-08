import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 90vh;
  margin: 5% 5% 0;
  width: 90%;
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
  margin-left: 40px;
`

export const ButtonContainer = styled.div`
  bottom: 5%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    width: 90%;
  }
`
