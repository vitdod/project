import { button } from './Button.css'

type ButtonProps = {
  tone: 'red' | 'ordinary' | 'dark'
  text: string
  style?: {}
  className?: string
  Icon?: JSX.Element
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const Button = ({ tone, text, style, className, Icon, onClick }: ButtonProps) => {
  return (
    <button
      style={style}
      className={[button({ backgroundColor: tone }), className].join(' ')}
      onClick={onClick}
    >
      {Icon}
      <div>{text}</div>
    </button>
  )
}

export default Button
