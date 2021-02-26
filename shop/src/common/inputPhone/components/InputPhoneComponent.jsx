import React from 'react';
import formatPhoneNumber from '../../untils/formatPhoneNumber';

class InputPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phone: '+375(__)___-__-__' };
  }

  render() {
    const {
      className, name, type, minLength, maxLength, placeholder,
    } = this.props;
    const { phone } = this.state;
    const { setClientInformation, clinetPhone } = this.props;
    return (
      <>
        <input
          value={phone}
          onFocus={() => this.setState({ phone: '+375' })}
          onChange={(event) => this.setState({
            phone: formatPhoneNumber(event.target.value),
          })}
          className={className}
          name={name}
          type={type}
          minLength={minLength}
          maxLength={maxLength}
          placeholder={placeholder}
        />
      </>
    );
  }
}

export default InputPhone;
