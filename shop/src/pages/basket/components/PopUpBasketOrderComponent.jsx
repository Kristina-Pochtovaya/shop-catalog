import React from 'react';
import addRemoveScroll from '../../../common/utils/addRemoveScroll';
import formatPhoneNumber from '../../../common/utils/formatPhoneNumber';
import InputWitchCkeckingNotNull from '../../../common/components/input/components/InputWitchCkeckingNotNullComponent';
import removeErrorNotNull from '../../../common/utils/removeErrorNotNull';
import BackSymbol from '../../../common/components/icons/components/BackSymbol';
import ButtonPopUpBasket from './ButtonPopUpBasketComponent';
import inputPopUpBasketOrderArray from '../constants/InputPopUpBasketOrderArray';
import setInitialValue from '../utils/setInitialValue';

class PopUpBasketOrder extends React.Component {
  constructor(props) {
    super(props);
    const { pages } = this.props;
    this.state = {
      clientName: '' || pages.loginPersonalAccountReducer.firstName,
      clientPhone: pages.loginPersonalAccountReducer.phone ? pages.loginPersonalAccountReducer.phone : '+375(__)___-__-__',
      clientAddress: '' || pages.loginPersonalAccountReducer.addres,
      clientMessage: '',
    };
  }

  updateData = (value, name) => {
    if (name === 'clientName') { this.setState({ clientName: value }); }
    if (name === 'clientAddress') { this.setState({ clientAddress: value }); }
    if (name === 'phone') { this.setState({ clientPhone: formatPhoneNumber(value) }); }
  }

  updatePhone = () => this.setState({ clientPhone: '+375' });

  render() {
    const {
      onAddClientInformation, items, setPopupOrderActive, setpopupSmthWentWrongActive,
      setPopupThanksActive, pages,
    } = this.props;
    const {
      clientName, clientPhone, clientAddress, clientMessage,
    } = this.state;

    return (
      <>
        <div className="popupOrder-box">
          <h2>Купить в 1 клик</h2>
          <div
            onClick={() => { setPopupOrderActive(false); addRemoveScroll(); }}
            role="presentation"
          >
            <BackSymbol className="backSymbol" />
          </div>
          <form className="form" autoComplete="off">
            {inputPopUpBasketOrderArray.map((input) => (
              <div className={input.name} key={input.name}>
                <p className={input.classNameOfString} key={input.classNameOfString}>
                  {input.nameOfString}
                </p>
                <InputWitchCkeckingNotNull
                  key={input.className}
                  initialValue={setInitialValue(input.name, clientName, clientPhone, clientAddress)}
                  type={input.type}
                  name={input.name}
                  classInput={input.className}
                  classSymbol={input.classNameSymbol}
                  updateData={this.updateData}
                  removeErrorNotNull={input.removeErrorNotNull ? removeErrorNotNull : ''}
                  removeErrorLength=""
                  classerrorLength=""
                  minLength={input.minLength ? '13' : ''}
                  maxLength={input.maxLength ? '13' : ''}
                  placeholder={input.placeholder ? '+375 (__) ___-__-__' : ''}
                  updatePhone={input.onFocus ? this.updatePhone : ''}
                  onEnterEmail=""
                  classNameOfString={input.classNameOfString}
                  nameOfString={input.nameOfString}
                />
              </div>
            ))}
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
            <ButtonPopUpBasket
              state={this.state}
              pages={pages}
              items={items}
              setPopupOrderActive={setPopupOrderActive}
              onAddClientInformation={onAddClientInformation}
              setpopupSmthWentWrongActive={setpopupSmthWentWrongActive}
              setPopupThanksActive={setPopupThanksActive}
            />
          </form>
        </div>
      </>
    );
  }
}

export default PopUpBasketOrder;
