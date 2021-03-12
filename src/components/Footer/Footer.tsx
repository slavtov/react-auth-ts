import Logo from '../Logo/Logo'
import './Footer.css'

const Footer: React.FC = () => (
  <footer id="footer" className="footer">
    <div className="footer-content container">
      <Logo />
      <span>Footer</span>
    </div>
  </footer>
)

export default Footer
