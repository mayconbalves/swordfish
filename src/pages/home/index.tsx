import { useState } from 'react'
import * as S from './styled'
import Input from '../../components/input'

const Home = () => {
  const [isValid, setValidate] = useState(false)
  return (
    <S.Container>
      <S.TitleContainer>
        <h1>Valide sua senha</h1>
      </S.TitleContainer>
      <S.InputContainer>
        <Input name="nome" placeholder="nome" />
        <Input name="email" placeholder="email" />
        <Input name="senha" placeholder="senha" />
      </S.InputContainer>
      <S.PasswordContainer>
        {isValid ? (
          <S.Alert color="green">Senha Valida</S.Alert>
        ) : (
          <S.Alert color="red">Senha Invalida</S.Alert>
        )}
        <S.List>
          <li>
            <p>Senha deve conter 6 digitos</p>
          </li>
          <li>
            <p>Senha deve conter 2 digitos adjacentes iguais</p>
          </li>
          <li>
            <p>
              Senha deve conter digitos em uma sequência crescente ou de mesmo
              valor
            </p>
          </li>
          <li>
            <p>Senha deve estar entre os números 184759 e 856920</p>
          </li>
        </S.List>
      </S.PasswordContainer>
      <S.ButtonContainer>
        {isValid ? (
          <S.Alert color="green">Resultado enviado com sucesso.</S.Alert>
        ) : (
          <S.Alert color="red">
            Falha ao enviar o resultado. Tente novamente.
          </S.Alert>
        )}
        <button>Enviar</button>
      </S.ButtonContainer>
    </S.Container>
  )
}

export default Home
