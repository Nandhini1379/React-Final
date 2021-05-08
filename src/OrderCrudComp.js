import React from "react";
import OrderComp from "./OrderComp";
import OrderItemList from "./OrderItemList";

class OrderCrudComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: null,
      OrderId: "",
      customerName: "",
      customerCntctNmbr: "",
      products: [],
      prodName: "",
      prodUnitPrice: "",
      prodQty: "",
      totalAmount: 0,
    };
  }

  handleCurrentItem = (index) => {
    this.setState({
      currentIndex: index,
      OrderId: this.props.data[index].OrderId,
      customerName: this.props.data[index].customerName,
      customerCntctNmbr: this.props.data[index].customerCntctNmbr,
      products: this.props.data[index].products.slice(),
      prodName: "",
      prodUnitPrice: "",
      prodQty: "",
      totalAmount: this.props.data[index].totalAmount,
    });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleNew = () => {
    this.props.newItemHandler({
      OrderId: this.state.OrderId,
      customerName: this.state.customerName,
      customerCntctNmbr: this.state.customerCntctNmbr,
      products: this.state.products.slice(),
      totalAmount: this.state.totalAmount,
    });
    this.setState({
      currentIndex: null,
      OrderId: "",
      customerName: "",
      customerCntctNmbr: "",
      products: [],
      prodName: "",
      prodUnitPrice: "",
      prodQty: "",
      totalAmount: 0,
    });
  };

  handleUpdate = () => {
    this.props.updateItemHandler(this.state.currentIndex, {
      OrderId: this.state.OrderId,
      customerName: this.state.customerName,
      customerCntctNmbr: this.state.customerCntctNmbr,
      products: this.state.products.slice(),
      totalAmount: this.state.totalAmount,
    });
    this.setState({
      currentIndex: null,
      OrderId: "",
      customerName: "",
      customerCntctNmbr: "",
      products: [],
      prodName: "",
      prodUnitPrice: "",
      prodQty: "",
      totalAmount: 0,
    });
  };

  handleDelete = () => {
    this.props.deleteItemHandler(this.state.currentIndex);
    this.setState({
      currentIndex: null,
      OrderId: "",
      customerName: "",
      customerCntctNmbr: "",
      products: [],
      prodName: "",
      prodUnitPrice: "",
      prodQty: "",
      totalAmount: 0,
    });
  };

  handleProdAdd = () => {
    let prod = this.state.products.slice();
    prod.push({
      productName: this.state.prodName,
      unitPrice: this.state.prodUnitPrice,
      quantity: this.state.prodQty,
    });
    this.setState({
      products: prod,
      prodName: "",
      prodUnitPrice: "",
      prodQty: "",
      totalAmount: prod.reduce((x, y) => {
        return x + y.unitPrice * y.quantity
      }, 0),
    });
  };

  handleProdEdit = (index) => {
    console.log("handleProdEdit", this.state.products[index])
    let prod = this.state.products.slice();
    prod.splice(index, 1);
    this.setState({
      prodName: this.state.products[index].productName,
      prodUnitPrice: this.state.products[index].unitPrice,
      prodQty: this.state.products[index].quantity,
      products: prod,
      totalAmount: prod.reduce((x, y) => {
        return x + y.unitPrice * y.quantity
      }, 0),
    });
  };

  handleProdDelete = (index) => {
    let prod = this.state.products.slice();
    prod.splice(index, 1);
    this.setState({
      products: prod,
      totalAmount: prod.reduce((x, y) => {
        return x + y.unitPrice * y.quantity
      }, 0),
    });
  };

  handleCancel = () => {
    this.setState({
      currentIndex: null,
      OrderId: "",
      customerName: "",
      customerCntctNmbr: "",
      products: [],
      prodName: "",
      prodUnitPrice: "",
      prodQty: "",
      totalAmount: 0,
    });
  };

  render() {
    let formComp =
      this.state.currentIndex == null ? (
        <OrderComp
          type="add"
          flag="true"
          data={{
            OrderId: this.state.OrderId,
            customerName: this.state.customerName,
            customerCntctNmbr: this.state.customerCntctNmbr,
            products: this.state.products,
            prodName: this.state.prodName,
            prodUnitPrice: this.state.prodUnitPrice,
            prodQty: this.state.prodQty,
            totalAmount: this.state.totalAmount,
          }}
          onChangeHandler={this.handleOnChange}
          onProdNewHandler={this.handleProdAdd}
          onProdEditHandler={this.handleProdEdit}
          onProdDelHandler={this.handleProdDelete}
          newItemHandler={this.handleNew}
        />
      ) : (
        <OrderComp
          type="modify"
          flag="true"
          data={{
            OrderId: this.state.OrderId,
            customerName: this.state.customerName,
            customerCntctNmbr: this.state.customerCntctNmbr,
            products: this.state.products,
            prodName: this.state.prodName,
            prodUnitPrice: this.state.prodUnitPrice,
            prodQty: this.state.prodQty,
            totalAmount: this.state.totalAmount,
          }}
          onChangeHandler={this.handleOnChange}
          updateItemHandler={this.handleUpdate}
          deleteItemHandler={this.handleDelete}
          onProdNewHandler={this.handleProdAdd}
          onProdEditHandler={this.handleProdEdit}
          onProdDelHandler={this.handleProdDelete}
          cancelHandler={this.handleCancel}
        />
      );
    return (
      <div className="container p-5">
        {this.props.itemType}
        <div className="row gap-4">
          <div className="col">{formComp}</div>
          <div
            className="col px-3 overflow-auto"
            style={{ maxHeight: "720px" }}
          >
            {this.props.data.map((ele, index) => {
              return (
                <OrderItemList
                  key={index}
                  data={ele}
                  idx={index}
                  getSelected={this.handleCurrentItem}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default OrderCrudComp;
