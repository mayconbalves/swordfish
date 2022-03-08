import { MouseEventHandler } from 'react'
import * as S from './styled'

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  title: string
  type: 'submit' | 'button'
}

const Button = ({ onClick, title, type }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} type={type}>
      {title}
    </S.Button>
  )
}

export default Button
