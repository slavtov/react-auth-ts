import { memo } from 'react'
import './Alert.css'

interface Props {
  message: string
  type?: string
}

const Alert: React.FC<Props> = ({ message, type = 'danger' }) => (
  <div className={`alert alert-${type}`}>
    {message}
  </div>
)

export default memo(Alert)
