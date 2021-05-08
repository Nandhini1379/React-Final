import React from "react";
import NavComp from "./NavComp";
import { Redirect } from "react-router-dom";
import MediCrudComp from "./MediCrudComp";
import OrderCrudComp from "./OrderCrudComp";
import SalesExecCrudComp from "./SalesExecCrudComp";

class ManagerDash extends React.Component {
  constructor(props) {
    super(props);
    let medicines =
      localStorage.getItem("pharma-medicines") === null
        ? []
        : JSON.parse(localStorage.getItem("pharma-medicines"));
    let orders =
      localStorage.getItem("pharma-orders") === null
        ? []
        : JSON.parse(localStorage.getItem("pharma-orders"));
    let salesExecs =
      localStorage.getItem("pharma-salesExecs") === null
        ? []
        : JSON.parse(localStorage.getItem("pharma-salesExecs"));
    this.state = {
      medicines: [...medicines],
      orders: [...orders],
      salesExecs: [...salesExecs],
      currentItemType: "medicine",
    };
  }

  changeItemType = (itemType) => {
    this.setState({
      currentItemType: itemType,
    });
  };

  pushNewItem = (obj) => {
    if (this.state.currentItemType === "medicine") {
      this.setState({
        medicines: this.state.medicines.concat(obj),
      });
    } else if (this.state.currentItemType === "orders") {
      this.setState({
        orders: this.state.orders.concat(obj),
      });
    } else {
      this.setState({
        salesExecs: this.state.salesExecs.concat(obj),
      });
    }
  };

  updateExistingItem = (index, obj) => {
    let items;
    if (this.state.currentItemType === "medicine") {
      items = this.state.medicines.slice();
      items[index] = obj;
      this.setState({ medicines: items });
    } else if (this.state.currentItemType === "orders") {
      items = this.state.orders.slice();
      items[index] = obj;
      this.setState({ orders: items });
    } else {
      items = this.state.salesExecs.slice();
      items[index] = obj;
      this.setState({ salesExecs: items });
    }
  };

  deleteExistingItem = (index) => {
    let items;
    if (this.state.currentItemType === "medicine") {
      items = this.state.medicines.slice();
      items.splice(index, 1);
      this.setState({ medicines: items });
    } else if (this.state.currentItemType === "orders") {
      items = this.state.orders.slice();
      items.splice(index, 1);
      this.setState({ orders: items });
    } else {
      items = this.state.salesExecs.slice();
      items.splice(index, 1);
      this.setState({ salesExecs: items });
    }
  };

  componentWillUnmount() {
    localStorage.setItem(
      "pharma-medicines",
      JSON.stringify(this.state.medicines)
    );
    localStorage.setItem("pharma-orders", JSON.stringify(this.state.orders));
    localStorage.setItem(
      "pharma-salesExecs",
      JSON.stringify(this.state.salesExecs)
    );
  }

  render() {
    let loggedInUserType = localStorage.getItem("pharma-loggedInUserType");
    let crudComp;
    if (loggedInUserType === "salesExec") {
      alert("You are not allowed to View this page!");
      return <Redirect to="/salesExecutive" />;
    } else {
      if (this.state.currentItemType === "medicine") {
        crudComp = (
          <MediCrudComp
            data={this.state.medicines}
            newItemHandler={this.pushNewItem}
            updateItemHandler={this.updateExistingItem}
            deleteItemHandler={this.deleteExistingItem}
          />
        );
      } else if (this.state.currentItemType === "orders") {
        crudComp = (
          <OrderCrudComp
            data={this.state.orders}
            newItemHandler={this.pushNewItem}
            updateItemHandler={this.updateExistingItem}
            deleteItemHandler={this.deleteExistingItem}
          />
        );
      } else {
        crudComp = (
          <SalesExecCrudComp
            data={this.state.salesExecs}
            newItemHandler={this.pushNewItem}
            updateItemHandler={this.updateExistingItem}
            deleteItemHandler={this.deleteExistingItem}
          />
        );
      }
      return (
        <div>
          <NavComp name="Manager" history={this.props.history} />
          <div className="mt-5 w-75 mx-auto d-flex justify-content-evenly">
            <button
              className="btn btn-outline-dark"
              onClick={() => {
                this.changeItemType("medicine");
              }}
            >
              <i className="bi bi-file-plus"></i> Medicines
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => {
                this.changeItemType("orders");
              }}
            >
              <i className="bi bi-box-seam"></i> Orders
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => {
                this.changeItemType("salesExecs");
              }}
            >
              <i className="bi bi-people"></i> Sales Executives
            </button>
          </div>
          {crudComp}
        </div>
      );
    }
  }
}

export default ManagerDash;
