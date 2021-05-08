import React from "react";

function MedicineComp(props) {

  return (
    <div className="container-fluid shadow p-5 w-75 mx-auto">
      <div className="input-group mb-3">
        <span className="input-group-text">Name</span>
        <input
          type="text"
          id="name"
          className="form-control"
          value={props.data.name}
          onChange={(event) => { props.onChangeHandler(event)}}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Manufacturer Name</span>
        <input
          type="text"
          id="manufacturerName"
          className="form-control"
          value={props.data.manufacturerName}
          onChange={(event) => { props.onChangeHandler(event)}}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Price</span>
        <input
          type="text"
          id="price"
          className="form-control"
          value={props.data.price}
          onChange={(event) => { props.onChangeHandler(event)}}
        />
        <span className="input-group-text">Rs.</span>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Stock</span>
        <input
          type="text"
          id="stock"
          className="form-control"
          value={props.data.stock}
          onChange={(event) => { props.onChangeHandler(event)}}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Discount</span>
        <input
          type="text"
          id="discount"
          className="form-control"
          value={props.data.discount}
          onChange={(event) => { props.onChangeHandler(event)}}
        />
      </div>
      {props.type == "add" ? (
        <div className="container-fluid d-flex justify-content-evenly">
          <button
            className="btn btn-success"
            onClick={() => {
              props.newItemHandler();
            }}
          >
            <i className="bi bi-plus"></i> Add
          </button>
        </div>
      ) : (
        <div className="container-fluid d-flex justify-content-evenly">
          <button
            className="btn btn-info"
            onClick={() => {
              props.updateItemHandler();
            }}
          >
            <i className="bi bi-layers-half"></i> Update
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.deleteItemHandler();
            }}
          >
            <i className="bi bi-eraser"></i> Delete
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              props.cancelHandler();
            }}
          >
            <i className="bi bi-x"></i> Cancel
          </button>
        </div>
      )}
    </div>
  );

}

export default MedicineComp;
