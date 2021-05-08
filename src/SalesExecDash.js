import React from "react";
import NavComp from "./NavComp";
import { Redirect } from "react-router-dom";
import OrderCrudComp from "./OrderCrudComp";

class SalesExecDash extends React.Component {
  constructor(props) {
    super(props);
    let orders =
      localStorage.getItem("pharma-orders") === null ||
      localStorage.getItem("pharma-orders") === "[]"
        ? [
            {
              currentIndex: null,
              OrderId: "1234",
              customerName: "Naveen",
              customerCntctNmbr: "9999999999",
              products: [
                {
                  productName: "Astra Zeneca",
                  unitPrice: 1000,
                  quantity: 2,
                },
                {
                  productName: "Covax",
                  unitPrice: 1200,
                  quantity: 3,
                },
              ],
              totalAmount: 5600,
            },
          ]
        : JSON.parse(localStorage.getItem("pharma-orders"));
    this.state = {
      orders: [...orders],
    };
  }

  pushNewItem = (obj) => {
    this.setState({
      orders: this.state.orders.concat(obj),
    });
  };

  updateExistingItem = (index, obj) => {
    let items;
    items = this.state.orders.slice();
    items[index] = obj;
    this.setState({ orders: items });
  };

  deleteExistingItem = (index) => {
    let items;
    items = this.state.orders.slice();
    items.splice(index, 1);
    this.setState({ orders: items });
  };

  componentWillUnmount() {
    localStorage.setItem("pharma-orders", JSON.stringify(this.state.orders));
  }

  render() {
    let loggedInUserType = localStorage.getItem("pharma-loggedInUserType");
    if (loggedInUserType == "manager") {
      return <Redirect to="/manager" />;
    } else {
      return (
        <div>
          <NavComp name="Sales Executive" history={this.props.history} />
          <OrderCrudComp
            data={this.state.orders}
            newItemHandler={this.pushNewItem}
            updateItemHandler={this.updateExistingItem}
            deleteItemHandler={this.deleteExistingItem}
          />
        </div>
      );
    }
  }
}

export default SalesExecDash;
