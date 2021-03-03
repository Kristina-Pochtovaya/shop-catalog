import { React, createRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../../../common/loginForm/components/LoginFormComponent';
import LoginFormForgetPassword from '../../../../common/loginForm/components/LoginFormForgetPasswordComponent';
import logo from '../../../../assets/header/logo.png';
import basket from '../../../../assets/common/basket.png';

const Header = ({
  linkItem, link, disabled,
}) => {
  const [loginFormVisible, setLoginFormVisible] = useState(false);
  const [loginFormLoginPageVisible, setLoginFormLoginPage] = useState(true);
  const [LoginFormForgetPasswordVisible, setLoginLoginFormForgetPassword] = useState(false);
  const divRef = createRef();

  return (
    <div className="header-wrap">
      <div className="header-box">
        <div className="logo">
          <img src={logo} alt="Все для дома" title="Все для дома" />
        </div>
        <div className={!disabled ? 'basket' : 'basket -disabled'}>
          <Link to="/basket">
            <img src={basket} alt="Корзина" title="Корзина" />
          </Link>
        </div>
        <div className="headerNavigationButton">
          <Link to={link}>
            {linkItem}
          </Link>
        </div>
        <div ref={divRef}>
          <div
            className="loginDiv"

          >
            <button
              className="buttonLogin"
              type="button"
              onClick={() => {
                setLoginFormVisible(true);
              }}
            >
              Вход / регистрация
            </button>
          </div>
          <div>
            {loginFormVisible && loginFormLoginPageVisible
              ? (
                <LoginForm
                  divRef={divRef}
                  setLoginFormLoginPage={setLoginFormLoginPage}
                  setLoginLoginFormForgetPassword={setLoginLoginFormForgetPassword}
                />
              )
              : null}

            {loginFormVisible && LoginFormForgetPasswordVisible
              ? (
                <LoginFormForgetPassword
                  divRef={divRef}
                  setLoginFormLoginPage={setLoginFormLoginPage}
                  setLoginLoginFormForgetPassword={setLoginLoginFormForgetPassword}
                />
              )
              : null}

          </div>
        </div>
      </div>

    </div>
  );
};
export default Header;
