import '../../assets/css/header.css';
import { HiBars3 } from 'react-icons/hi2';

function Header() {
  return (
    <header>
      <nav className="flex space-between bg-color-secondary color-white nav-font p-t-5 p-b-5 p-l-50 p-r-20">
        <div>
          <a href="/">Instrumentalist</a>
        </div>
        <div className="flex">
          <a href="/" className="m-r-20">Keyboard</a>
          <a href="/" className="m-r-20">String</a>
          <a href="/" className="m-r-20">Brass</a>
          <a href="/" className="m-r-20">Woodwind</a>
          <div className="flex flex-dir-col center color-orange"><HiBars3 /></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
