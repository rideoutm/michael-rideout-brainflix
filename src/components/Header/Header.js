import BrainFlixlogo from "../../Assets/Logo/BrainFlix-logo.svg";
import loginAvatar from "../../Assets/Images/Mohan-muruge.jpg";

import "./header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo-container">
          <a href="./index.html">
            <img
              className="header__logo"
              src={BrainFlixlogo}
              alt={"BrainFlix"}
            />
          </a>
        </div>

        <form className="header__search-form">
          <div className="header__search-input-container">
            <label htmlFor="search"> </label>
            <input
              id="search"
              className="header__search-input"
              type="text"
              placeholder="Search"
            />
            <div>
              <img
                className="header__login-avatar"
                src={loginAvatar}
                alt={"Login Avatar"}
              />
            </div>
          </div>
          <div className="header_btn-container">
            <button className="header__btn">UPLOAD</button>
          </div>
          <div>
            <img
              className="header__login-avatar-tablet"
              src={loginAvatar}
              alt={"Login Avatar"}
            />
          </div>
        </form>
      </header>
    </>
  );
}

export default Header;
