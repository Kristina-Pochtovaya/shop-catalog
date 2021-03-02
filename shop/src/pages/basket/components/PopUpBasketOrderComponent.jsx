import React from 'react';
import postBasketItemsRequest from '../api/post/postBasketItemsRequest';
import addRemoveScroll from '../../../common/untils/addRemoveScroll';
import formatPhoneNumber from '../../../common/untils/formatPhoneNumber';

class PopUpBasketOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: '',
      clientPhone: '+375(__)___-__-__',
      clientAddress: '',
      clientMessage: '',
    };
  }

  render() {
    const {
      onAddClientInformation, items, setPopupOrderActive, setpopupSmthWentWrongActive,
      setPopupThanksActive,
    } = this.props;
    const {
      clientName, clientPhone, clientAddress, clientMessage,
    } = this.state;
    async function handleButtonClick() {
      setPopupOrderActive(false);
      const result = await postBasketItemsRequest(items.catalogItemsReducer,
        clientName, clientPhone, clientAddress, clientMessage);
      result === null ? setpopupSmthWentWrongActive(true) : setPopupThanksActive(true);
    }
    return (
      <>
        <div className="popupOrder-box">
          <h2>Купить в 1 клик</h2>
          <div
            onClick={() => {
              setPopupOrderActive(false);
              addRemoveScroll();
            }}
            role="presentation"
          >
            <svg className="backSymbol" viewBox="0 0 20 20">
              <g>
                <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
                <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
              </g>
            </svg>
          </div>
          <form className="form">
            <div className="name">
              <p className="nameString -required">Имя</p>
              <input
                className="nameInput"
                type="text"
                name="NAME"
                value={clientName}
                onChange={(event) => this.setState({
                  clientName: event.target.value,
                })}
                required
              />
            </div>
            <div className="phone">
              <p className="phoneString -required">Телефон</p>
              <input
                className="phoneInput"
                name="PHONE"
                type="tel"
                minLength="13"
                maxLength="13"
                placeholder="+375 (__) ___-__-__"
                value={clientPhone}
                onFocus={() => this.setState({ clientPhone: '+375' })}
                onChange={(event) => this.setState({
                  clientPhone: formatPhoneNumber(event.target.value),
                })}
              />
            </div>
            <div className="address">
              <p className="addressString -required">Адрес</p>
              <input
                className="addressInput"
                type="text"
                name="ADDRESS"
                value={clientAddress}
                onChange={(event) => this.setState({
                  clientAddress: event.target.value,
                })}
                required
              />
            </div>
            <div className="message">
              <p className="messageString">Сообщение</p>
              <textarea
                className="messageInput"
                name="MESSAGE"
                value={clientMessage}
                onChange={(event) => this.setState({
                  clientMessage: event.target.value,
                })}
              />
            </div>
            <button
              type="submit"
              className="buttonOrder"
              onClick={() => {
                onAddClientInformation({
                  clientName, clientPhone, clientAddress, clientMessage,
                });
                handleButtonClick();
              }}
            >
              Купить
            </button>
          </form>
        </div>

      </>
    );
  }
}

export default PopUpBasketOrder;
