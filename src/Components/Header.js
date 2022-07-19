import img from '../react-image.png'

function Header() {
    return(
      <header>
        <nav className='nav'>
          <img src={img} alt="react_logo" className='image'/>
          <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }

  export default Header