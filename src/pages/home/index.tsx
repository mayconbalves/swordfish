import { useState, ChangeEvent } from 'react'
import * as S from './styled'
import Input from '../../components/input'
import Button from '../../components/button'

const Home = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '' })
  const [isValid, setValidate] = useState(false)

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(value, 'value')
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = async () => {
    const data = await fetch(
      'https://61e036950f3bdb0017934eb0.mockapi.io/api/valid-passwords/results',
      {
        method: 'POST',
        body: JSON.stringify({ ...values })
      }
    )
    setValues({ name: '', email: '', password: '' })
    return data.status === 201
      ? console.log('usuario cadastrado com sucesso')
      : console.log('error ao cadastrar')
  }

  const onlyNumber = (number: string) => {
    return number.replace(/\D/g, '').replace(/(\d{6})\d+?$/, '$1')
  }

  return (
    <S.Container>
      <S.TitleContainer>
        <h1>Valide sua senha</h1>
      </S.TitleContainer>
      <S.InputContainer>
        <Input
          name="name"
          onChange={inputChange}
          placeholder="nome"
          value={values.name}
        />
        <Input
          name="email"
          onChange={inputChange}
          placeholder="email"
          value={values.email}
        />
        <Input
          maxLength={6}
          name="password"
          onChange={inputChange}
          placeholder="senha"
          value={onlyNumber(values.password)}
        />
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
        <Button onClick={handleSubmit} title="Enviar" type="button" />
      </S.ButtonContainer>
    </S.Container>
  )
}

export default Home
