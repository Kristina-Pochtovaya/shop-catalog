import React from 'react';
import axios from 'axios';

class Test extends React.Component {
  state = {
    data: [],
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      console.log(res);
this.setState({data: res.data});
    })
  }
  render() {
    return (
      <ul>
        {this.state.data.map((user) => <li>{user.name}</li>)}
      </ul>
    )
  }
}



export default Test;
