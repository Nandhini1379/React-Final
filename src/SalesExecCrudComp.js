import React from "react";
import SalesExecComp from "./SalesExecComp";
import SalesExecItemList from "./SalesExecItemList";

class SalesExecCrudComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: null,
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      experience: "",
    };
  }

  handleCurrentItem = (index) => {
    this.setState({
      currentIndex: index,
      firstName: this.props.data[index].firstName,
      lastName: this.props.data[index].lastName,
      dob: this.props.data[index].dob,
      gender: this.props.data[index].gender,
      experience: this.props.data[index].experience,
    });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleNew = () => {
    this.props.newItemHandler({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      gender: this.state.gender,
      experience: this.state.experience,
    });
    this.setState({
      currentIndex: null,
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      experience: "",
    });
  };

  handleUpdate = () => {
    this.props.updateItemHandler(this.state.currentIndex, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      gender: this.state.gender,
      experience: this.state.experience,
    });
    this.setState({
      currentIndex: null,
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      experience: "",
    });
  };

  handleDelete = () => {
    this.props.deleteItemHandler(this.state.currentIndex);
    this.setState({
      currentIndex: null,
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      experience: "",
    });
  };

  handleCancel = () => {
    this.setState({
      currentIndex: null,
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      experience: "",
    });
  };

  render() {
    let formComp =
      this.state.currentIndex == null ? (
        <SalesExecComp
          type="add"
          flag="true"
          data={{
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dob: this.state.dob,
            gender: this.state.gender,
            experience: this.state.experience,
          }}
          onChangeHandler={this.handleOnChange}
          newItemHandler={this.handleNew}
        />
      ) : (
        <SalesExecComp
          type="modify"
          flag="true"
          data={{
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dob: this.state.dob,
            gender: this.state.gender,
            experience: this.state.experience,
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
        <div className="row gap-4">
          <div className="col">{formComp}</div>
          <div className="col p-3 overflow-auto" style={{ maxHeight: "720px" }}>
            {this.props.data.map((ele, index) => {
              return (
                <SalesExecItemList
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

export default SalesExecCrudComp;
