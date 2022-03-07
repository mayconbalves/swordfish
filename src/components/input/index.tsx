import * as S from './styled'

interface InputProps {
  name?: string
  onChange?: () => void
  placeholder?: string
  required?: boolean
  value?: string | number
}

const Input = ({
  name,
  onChange,
  placeholder,
  required,
  value
}: InputProps) => (
  <S.Input
    data-testid="input"
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    value={value}
  />
)

export default Input
