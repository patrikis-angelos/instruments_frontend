import '../../assets/css/header.css';

function Header() {
  return (
    <header>
      <nav className="flex space-between bg-color-secondary color-white nav-font">
        <div>
          <div>Instrumentalist</div>
        </div>
        <div className="flex">
          <div>Keyboard</div>
          <div>String</div>
          <div>Brass</div>
          <div>Woodwind</div>
          <div><i className="" /></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
