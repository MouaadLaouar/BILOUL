import './NavBar.scss'
import logo from "../../assets/logo.png"
import biloul from "../../assets/BILOUL.png"

export default function NavBar() {
  return (
    <div className='NavBar'>
      <div className='logo'>
        <img className='logoPic' src={ logo } alt="logo" />
        <img className='biloul' src={ biloul } alt="bilou" />
      </div>

      <div className='Menu'>
        <ul>
          <li><a href="#Section-Two">Services</a></li>
          <li><a href="#Section-Four">Industries</a></li>
          <li><a href="#Section-Seven">Company</a></li>
          <li><a href="#Footer">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
