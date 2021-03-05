import React from 'react';
import postBasketItemsRequest from '../api/post/postBasketItemsRequest';
import addRemoveScroll from '../../../common/untils/addRemoveScroll';
import formatPhoneNumber from '../../../common/untils/formatPhoneNumber';
import setErrorNotNull from '../../../common/untils/setErrorNotNull';
import removeErrorNotNull from '../../../common/untils/removeErrorNotNull';

class PopUpBasketOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: '',
      clinetNameInput: 'nameInput',
      clientNameSymbol: 'nameSymbol',
      clientPhone: '+375(__)___-__-__',
      clientPhoneInput: 'phoneInput',
      clientPhoneSymbol: 'phoneSymbol',
      clientAddress: '',
      clientAddresInput: 'addressInput',
      clientAddresSymbol: 'addressSymbol',
      clientMessage: '',
    };
  }

  render() {
    const {
      onAddClientInformation, items, setPopupOrderActive, setpopupSmthWentWrongActive,
      setPopupThanksActive,
    } = this.props;
    const {
      clientName, clinetNameInput, clientNameSymbol,
      clientPhone, clientPhoneInput, clientPhoneSymbol,
      clientAddress, clientAddresInput, clientAddresSymbol,
      clientMessage,
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
                className={clinetNameInput}
                id={clinetNameInput}
                type="text"
                name="NAME"
                value={clientName}
                onChange={(event) => {
                  this.setState({
                    clientName: event.target.value,
                  });
                  removeErrorNotNull(clinetNameInput, clientNameSymbol);
                }}
                required
              />
              <svg className={`${clientNameSymbol} -disabled`} viewBox="0 0 14.98 15" id={clientNameSymbol}>
                <g>
                  <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
                </g>
              </svg>
            </div>
            <div className="phone">
              <p className="phoneString -required">Телефон:</p>
              <input
                className={clientPhoneInput}
                id={clientPhoneInput}
                name="PHONE"
                type="tel"
                minLength="13"
                maxLength="13"
                placeholder="+375 (__) ___-__-__"
                value={clientPhone}
                onFocus={() => this.setState({ clientPhone: '+375' })}
                onChange={(event) => {
                  this.setState({
                    clientPhone: formatPhoneNumber(event.target.value),
                  });
                  removeErrorNotNull(clientPhoneInput, clientPhoneSymbol);
                }}
              />
              <svg className={`${clientPhoneSymbol} -disabled`} viewBox="0 0 14.98 15" id={clientPhoneSymbol}>
                <g>
                  <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
                </g>
              </svg>
            </div>
            <div className="address">
              <p className="addressString -required">Адрес:</p>
              <input
                className={clientAddresInput}
                id={clientAddresInput}
                type="text"
                name="ADDRESS"
                value={clientAddress}
                onChange={(event) => {
                  this.setState({
                    clientAddress: event.target.value,
                  });
                  removeErrorNotNull(clientAddresInput, clientAddresSymbol);
                }}
                required
              />
              <svg className={`${clientAddresSymbol} -disabled`} viewBox="0 0 14.98 15" id={clientAddresSymbol}>
                <g>
                  <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
                </g>
              </svg>
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
            { (clientName && clientPhone && clientAddress)
              ? (
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
              )
              : (
                <button
                  type="submit"
                  className="buttonOrder"
                  onClick={() => {
                    if (!clientName) {
                      setErrorNotNull(clinetNameInput, clientNameSymbol);
                    }
                    if (!clientPhone.length < 13) {
                      setErrorNotNull(clientPhoneInput, clientPhoneSymbol);
                    }
                    if (!clientAddress) {
                      setErrorNotNull(clientAddresInput, clientAddresSymbol);
                    }
                  }}
                >
                  Купить
                </button>
              )}
          </form>
        </div>

      </>
    );
  }
}

export default PopUpBasketOrder;
