import React from 'react';
import axios from 'axios';

class ImageFromServerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { source: '' };
  }

  componentDidMount() {
    const { source } = this.state;
    axios
      .get(
        'http://localhost:8080/image',
        { responseType: 'arraybuffer' },
      )
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );
        this.setState({ source: `data:;base64,${base64}` });
      });
  }

  render() {
    const { source } = this.state;
    return (
      <>
        <img style={{ height: '160px', width: '255px' }} src={source} />
      </>
    );
  }
}

export default ImageFromServerComponent;
