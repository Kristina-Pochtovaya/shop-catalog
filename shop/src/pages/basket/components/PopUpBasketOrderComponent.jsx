import React from 'react';
import postBasketItemsRequest from '../api/post/postBasketItemsRequest';
import addRemoveScroll from '../../../common/utils/addRemoveScroll';
import formatPhoneNumber from '../../../common/utils/formatPhoneNumber';
import setErrorNotNull from '../../../common/utils/setErrorNotNull';
import ErrorSymbol from '../../../common/components/icons/components/ErrorSymbolComponent';
import InputWitchCkeckingNotNull from '../../../common/components/input/components/InputWitchCkeckingNotNullComponent';
import postUnautherizedUser from '../api/post/postUnautherizedUserRequest';
import removeErrorNotNull from '../../../common/utils/removeErrorNotNull';
import BackSymbol from '../../../common/components/icons/components/BackSymbol';

class PopUpBasketOrder extends React.Component {
  constructor(props) {
    super(props);
    const { pages } = this.props;
    this.state = {
      clientName: '' || pages.loginPersonalAccountReducer.firstName,
      clinetNameInput: 'nameInput',
      clientNameSymbol: 'nameSymbol',
      clientPhone: pages.loginPersonalAccountReducer.phone ? pages.loginPersonalAccountReducer.phone : '+375(__)___-__-__',
      clientPhoneInput: 'phoneInput',
      clientPhoneSymbol: 'phoneSymbol',
      clientAddress: '' || pages.loginPersonalAccountReducer.address,
      clientAddresInput: 'addressInput',
      clientAddresSymbol: 'addressSymbol',
      clientMessage: '',
    };
  }

  updateData = (value, name) => {
    if (name === 'clientName') { this.setState({ clientName: value }); }
    if (name === 'clientAddress') { this.setState({ clientAddress: value }); }
  }

  render() {
    const {
      onAddClientInformation, items, setPopupOrderActive, setpopupSmthWentWrongActive,
      setPopupThanksActive, pages,
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
        clientName, clientPhone, clientAddress, clientMessage, pages);
      result === null ? setpopupSmthWentWrongActive(true) : setPopupThanksActive(true);
    }
    async function handleAddUnautherizedUser() {
      await postUnautherizedUser(clientName, clientPhone, clientAddress);
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
            <BackSymbol className="backSymbol" />
          </div>
          <form className="form">
            <div className="name">
              <p className="nameString -required">Имя</p>
              <InputWitchCkeckingNotNull
                initialValue={clientName}
                type="text"
                name="clientName"
                classInput={clinetNameInput}
                classSymbol={clientNameSymbol}
                updateData={this.updateData}
                removeErrorNotNull={removeErrorNotNull}
              />
            </div>
            <div className="phone">
              <p className="phoneString -required">Телефон:</p>
              <input
                className={clientPhoneInput}
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
              <ErrorSymbol Class={`${clientPhoneSymbol} -disabled`} />
            </div>
            <div className="address">
              <p className="addressString -required">Адрес:</p>
              <InputWitchCkeckingNotNull
                initialValue={clientAddress}
                type="text"
                name="clientAddress"
                classInput={clientAddresInput}
                classSymbol={clientAddresSymbol}
                updateData={this.updateData}
                removeErrorNotNull={removeErrorNotNull}
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
                    if (!pages.loginPersonalAccountReducer.firstName
                      && !pages.loginPersonalAccountReducer.phone
                      && !pages.loginPersonalAccountReducer.address) {
                      handleAddUnautherizedUser();
                    }
                  }}
                >
                  Купить
                </button>
              ) : (
                <button
                  type="submit"
                  className="buttonOrder"
                  onClick={() => {
                    if (!clientName) {
                      setErrorNotNull(clinetNameInput, clientNameSymbol);
                    } if (!clientPhone.length < 13) {
                      setErrorNotNull(clientPhoneInput, clientPhoneSymbol);
                    } if (!clientAddress) {
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
