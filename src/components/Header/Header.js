import BrainFlixlogo from "../../Assets/Logo/BrainFlix-logo.svg";
import loginAvatar from "../../Assets/Images/Mohan-muruge.jpg";

import "./header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <a href="#root">
          <img className="header__logo" src={BrainFlixlogo} alt={"BrainFlix"} />
        </a>
      </div>

      <form className="header__search-form">
        <label htmlFor="search">
          <input
            className="header__search-input"
            type="text"
            placeholder="Search"
          />
          <img
            className="header__login-avatar"
            src={loginAvatar}
            alt={"Login Avatar"}
          />
        </label>
        <div className="header_btn-container">
          <button className="header__btn">
            {/* <img
              className="header__btn-icon"
              src={require("./Assets/Icons/upload.svg").default}
              alt={"search icon"}
            /> */}
            UPLOAD
          </button>
        </div>
      </form>
    </header>
  );
}

export default Header;
