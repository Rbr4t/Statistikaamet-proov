import './Header.css'
import Logo from './Logo'

function Header() {
  return (
    <header className="header">
      {/* Top utility bar */}
      <div className="header-utility">
        <div className="header-utility-left">
          Statistikaamet: <span>Viktoriin</span> <span className="chevron">▾</span>
        </div>
        
        <div className="header-utility-right">
          
          <div className="lang">
            <button>EST</button>
            <span className="lang-divider">|</span>
            <button className="inactive">ENG</button>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="header-main">
        <Logo />
        
      </div>
    </header>
  )
}

export default Header