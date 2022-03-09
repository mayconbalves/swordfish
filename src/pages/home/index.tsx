import { useState, ChangeEvent } from 'react'
import * as S from './styled'
import Input from '../../components/input'
import Button from '../../components/button'

const Home = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '' })
  const [isValid, setValidate] = useState(false)

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = async () => {
    passwordValidated(values.password)
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

  const onlyNumber = (password: string) => {
    return password.replace(/\D/g, '').replace(/(\d{6})\d+?$/, '$1')
  }

  const adjacentDigits = (numbers: any): boolean => {
    const numberArr = [...numbers]
    numberArr.filter((number, index) => {
      if (number === numberArr[index + 1]) {
        return true
      }
    })

    return false
  }

  const growingNumbers = (numbers: any): boolean => {
    const numberArr = [...numbers]
    numberArr.every((number, index) => {
      if (number <= numberArr[index + 1]) {
        return true
      }
    })

    return false
  }

  const equalNumbers = (password: string): boolean => {
    if (
      password === '222222' ||
      password === '333333' ||
      password === '444444' ||
      password === '555555' ||
      password === '666666' ||
      password === '777777' ||
      password === '888888' ||
      password === '999999'
    ) {
      return true
    }

    return false
  }

  const passwordValidated = (password: any) => {
    const passwordArr = [...password].join('')
    const minRange = 184759
    const maxRenge = 856920

    if (Number(passwordArr) > minRange && Number(passwordArr) < maxRenge) {
      if (equalNumbers(passwordArr)) {
        return setValidate(true)
      }

      if (adjacentDigits(passwordArr) && growingNumbers(passwordArr)) {
        return setValidate(true)
      } else {
        return setValidate(false)
      }
    }
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
