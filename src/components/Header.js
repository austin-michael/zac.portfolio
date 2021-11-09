import { NavLink } from "react-router-dom";

const Header = () => {

  function openHamburger() {
    const headerLinks = document.getElementsByClassName('header-links')[0];
    headerLinks.classList.toggle('active');
  }

  return (
    <nav className="header">
      <NavLink to='/' className="logo">zac.ariaz</NavLink>
      <a className="hamburger-button" onClick={openHamburger}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="header-links">
        <ul>
          <li><NavLink to='/' activeStyle={{ textDecoration: "underline", textUnderlineOffset: "7px", fontWeight: "bold" }} exact>Projects</NavLink></li>
          <li><NavLink to='/about' activeStyle={{ textDecoration: "underline", textUnderlineOffset: "7px", fontWeight: "bold" }} exact>About</NavLink></li>
          <li><a href="mailto:zacnwilliams@gmail.com">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;