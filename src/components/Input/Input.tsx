import { memo } from 'react'
import './Input.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = props => (
  <div className="form-input">
    <input {...props} className="input" />
  </div>
)

export default memo(Input)
