import React from 'react';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';
import PopUpErrorLoading from '../../../common/components/popup/components/PopUpErrorLoadingComponent';
import postHistoryOrder from '../api/post/postHistoryOrder';
import OrdersHistoryTable from './OrdersHistoryTableComponent';
import updateData from '../utils/updateData';

class OrdersHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      errorMessage: '',
      popupSmthWentWrongActive: true,
      ordersArray: [],
    };
  }

  async componentDidMount() {
    const { pages } = this.props;
    const setState = this.setState.bind(this);
    await postHistoryOrder(pages.loginPersonalAccountReducer.id, updateData, setState);
  }

  setpopupSmthWentWrongActive = (value) => { this.setState({ popupSmthWentWrongActive: value }); }

  render() {
    const {
      isLoading, errorMessage, popupSmthWentWrongActive, ordersArray,
    } = this.state;
    if (isLoading) return <div className="-isLoading"> </div>;
    if (errorMessage) {
      return (
        <PopUpErrorLoading
          popupSmthWentWrongActive={popupSmthWentWrongActive}
          setpopupSmthWentWrongActive={this.setpopupSmthWentWrongActive}
        />
      );
    }
    return (
      <>
        <ConnectedHeader linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled />
        <OrdersHistoryTable ordersArray={ordersArray} />
        <Footer />
      </>
    );
  }
}

export default OrdersHistory;
