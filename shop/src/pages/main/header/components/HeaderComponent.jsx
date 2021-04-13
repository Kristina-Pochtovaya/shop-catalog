import { React, createRef } from 'react';
import { Link } from 'react-router-dom';
import ConnectedLoginForm from '../../../../common/components/loginForm/container/LoginFormComponentContainer';
import LoginFormForgetPassword from '../../../../common/components/loginForm/components/LoginFormForgetPasswordComponent';
import logo from '../../../../common/assets/header/logo.png';
import basket from '../../../../common/assets/common/basket.png';
import PersonalAccountSymbol from '../../../../common/components/icons/components/PersonalAccountSymbol';

const Header = ({
  linkItem, link, disabled, pages, onLogin,
}) => {
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
        { String(pages.loginPersonalAccountReducer.loginIsVisible) === 'true'
          ? (
            <div ref={divRef}>
              <div
                className="loginDiv"
              >
                <button
                  className="buttonLogin"
                  type="button"
                  onClick={() => {
                    onLogin(true, true, false);
                  }}
                >
                  Вход / регистрация
                </button>
              </div>
              <div>
                {String(pages.loginPersonalAccountReducer.loginFormIsVisible) === 'true'
                && String(pages.loginPersonalAccountReducer.loginFormLoginPageIsVisible) === 'true'
                  ? (
                    <ConnectedLoginForm
                      className="connectedLoginForm"
                      divRef={divRef}
                    />
                  ) : null}
                {String(pages.loginPersonalAccountReducer.loginFormIsVisible) === 'true'
                 && String(pages.loginPersonalAccountReducer.loginFormForgetPasswordIsVisible) === 'true'
                  ? (
                    <LoginFormForgetPassword
                      className="loginFormForgetPassword"
                      divRef={divRef}
                    />
                  ) : null}
              </div>
            </div>
          ) : null}
        {String(pages.loginPersonalAccountReducer.personAccountIsVisible) === 'true'
          ? (
            <div className="personalAccountDiv">
              <PersonalAccountSymbol className="personalAccountIcon" />
              <Link to="/personal">
                <button
                  className="personalAccountLink"
                  type="button"
                >
                  Личный кабинет
                </button>
              </Link>
            </div>
          ) : null}
      </div>
    </div>
  );
};

export default Header;
