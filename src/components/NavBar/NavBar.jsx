import './NavBar.scss'
import logo from "../../assets/logo.png"

export default function NavBar() {
  return (
    <div className='NavBar'>
      <div className='logo'>
        <img src={ logo } alt="logo" />
        <h1>BILOUL</h1>
      </div>

      <div className='Menu'>
        <ul>
          <li><a href="#Section-Two">Services</a></li>
          <li><a href="#Section-Four">Industries</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
