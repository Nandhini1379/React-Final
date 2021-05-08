import React from "react";
import MedicineComp from "./MedicineComp";
import MedicineItemList from "./MedicineItemList";

class MediCrudComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: null,
      name: "",
      manufacturerName: "",
      price: "",
      stock: "",
      discount: "",
    };
  }

  handleCurrentItem = (index) => {
    this.setState({
      currentIndex: index,
      name: this.props.data[index].name,
      manufacturerName: this.props.data[index].manufacturerName,
      price: this.props.data[index].price,
      stock: this.props.data[index].stock,
      discount: this.props.data[index].discount,
    });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleNew = () => {
    this.props.newItemHandler({
      name: this.state.name,
      manufacturerName: this.state.manufacturerName,
      price: this.state.price,
      stock: this.state.stock,
      discount: this.state.discount,
    });
    this.setState({
      currentIndex: null,
      name: "",
      manufacturerName: "",
      price: "",
      stock: "",
      discount: "",
    });
  };

  handleUpdate = () => {
    this.props.updateItemHandler(this.state.currentIndex, {
      name: this.state.name,
      manufacturerName: this.state.manufacturerName,
      price: this.state.price,
      stock: this.state.stock,
      discount: this.state.discount,
    });
    this.setState({
      currentIndex: null,
      name: "",
      manufacturerName: "",
      price: "",
      stock: "",
      discount: "",
    });
  };

  handleDelete = () => {
    this.props.deleteItemHandler(this.state.currentIndex);
    this.setState({
      currentIndex: null,
      name: "",
      manufacturerName: "",
      price: "",
      stock: "",
      discount: "",
    });
  };

  handleCancel = () => {
    this.setState({
      currentIndex: null,
      name: "",
      manufacturerName: "",
      price: "",
      stock: "",
      discount: "",
    });
  };

  render() {
    let formComp =
      this.state.currentIndex == null ? (
        <MedicineComp
          type="add"
          flag="true"
          data={{
            name: this.state.name,
            manufacturerName: this.state.manufacturerName,
            price: this.state.price,
            stock: this.state.stock,
            discount: this.state.discount,
          }}
          onChangeHandler={this.handleOnChange}
          newItemHandler={this.handleNew}
        />
      ) : (
        <MedicineComp
          type="modify"
          flag="true"
          data={{
            name: this.state.name,
            manufacturerName: this.state.manufacturerName,
            price: this.state.price,
            stock: this.state.stock,
            discount: this.state.discount,
          }}
          onChangeHandler={this.handleOnChange}
          updateItemHandler={this.handleUpdate}
          deleteItemHandler={this.handleDelete}
          cancelHandler={this.handleCancel}
        />
      );
    return (
      <div className="container p-5">
        {this.props.itemType}
        <div className="row gap-4" >
          <div className="col">{formComp}</div>
          <div className="col p-3 overflow-auto" style={{maxHeight: "720px"}}>
            {this.props.data.map((ele, index) => {
              return (
                <MedicineItemList
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

export default MediCrudComp;
