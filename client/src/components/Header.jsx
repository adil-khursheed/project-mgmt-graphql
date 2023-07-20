import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="navbar bg-light mb-4 p-0">
      <nav className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>ProjectMGMT</div>
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
