import { React, createRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ConnectedLoginForm from '../../../../common/loginForm/components/LoginFormComponent';
import LoginFormForgetPassword from '../../../../common/loginForm/components/LoginFormForgetPasswordComponent';
import logo from '../../../../assets/header/logo.png';
import basket from '../../../../assets/common/basket.png';
import { LOGIN } from '../../../../redux/actions/loginPersonalAccountActions';

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
                      divRef={divRef}
                    />
                  )
                  : null}

                {String(pages.loginPersonalAccountReducer.loginFormIsVisible) === 'true'
                 && String(pages.loginPersonalAccountReducer.loginFormForgetPasswordIsVisible) === 'true'
                  ? (
                    <LoginFormForgetPassword
                      divRef={divRef}
                    />
                  )
                  : null}

              </div>
            </div>
          )
          : null}

        {String(pages.loginPersonalAccountReducer.personAccountIsVisible) === 'true'
          ? (
            <div className="personalAccountDiv">
              <svg viewBox="0 0 12.61 15" className="personalAccountIcon">
                <g>
                  <circle cx="6.3" cy="3.48" r="3.48" />
                  <path d="M6.3,8.7A6.3,6.3,0,0,0,0,15H12.61A6.3,6.3,0,0,0,6.3,8.7Z" />
                </g>
              </svg>
              <Link to="/personal">
                <button
                  className="personalAccountLink"
                  type="button"
                >
                  Личный кабинет
                </button>
              </Link>
            </div>
          )
          : null}

      </div>
    </div>
  );
};

const ConnectedHeader = connect(
  (state) => ({
    pages: state,
  }),
  (dispatch) => ({
    onLogin: (
      loginFormIsVisible, loginFormLoginPageIsVisible, loginFormForgetPasswordIsVisible,
    ) => dispatch({
      type: LOGIN.type,
      payload: {
        loginFormIsVisible, loginFormLoginPageIsVisible, loginFormForgetPasswordIsVisible,
      },
    }),
  }),
)(Header);

export default ConnectedHeader;
