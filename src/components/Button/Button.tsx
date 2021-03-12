import { memo } from 'react'
import './Button.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color: string
  size?: string
  full?: boolean
}

const Button: React.FC<Props> = ({ children, color, size = 'middle', full, ...props }) => (
  <button
    className={`button button-${color} button-${size}`}
    style={{ width: full ? '100%' : '' }}
    {...props}
  >
    {children}
  </button>
)

export default memo(Button)
