import "./Header.css";
import logo from "../../movme-logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="nav">Nav</div>
      </div>
    </header>
  );
}
