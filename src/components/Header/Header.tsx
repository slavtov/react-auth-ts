import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import './Header.css'

const Header: React.FC = () => (
  <header id="header" className="header">
    <div className="navbar container">
      <Logo />
      <Nav />
    </div>
  </header>
)

export default Header
