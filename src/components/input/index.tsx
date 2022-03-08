import { ChangeEvent } from 'react'
import * as S from './styled'

interface InputProps {
  maxLength?: number
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  required?: boolean
  value: string | number
}

const Input = ({
  maxLength,
  name,
  onChange,
  placeholder,
  required,
  value
}: InputProps) => (
  <S.Input
    data-testid="input"
    maxLength={maxLength}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    value={value}
  />
)

export default Input
