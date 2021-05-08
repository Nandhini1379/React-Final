import React from "react";

function SalesExecComp(props) {

  return (
    <div className="container-fluid shadow p-5 w-75 mx-auto">
      <div className="input-group mb-3">
        <span className="input-group-text">First Name</span>
        <input
          type="text"
          id="firstName"
          className="form-control"
          value={props.data.firstName}
          onChange={(event) => { props.onChangeHandler(event)}}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Last Name</span>
        <input
          type="text"
          id="lastName"
          className="form-control"
          value={props.data.lastName}
          onChange={(event) => { props.onChangeHandler(event)}}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">D.O.B</span>
        <input
          type="text"
          id="dob"
          className="form-control"
          value={props.data.dob}
          onChange={(event) => { props.onChangeHandler(event)}}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Gender</span>
        <input
          type="text"
          id="gender"
          className="form-control"
          value={props.data.gender}
          onChange={(event) => { props.onChangeHandler(event)}}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Experience</span>
        <input
          type="text"
          id="experience"
          className="form-control"
          value={props.data.experience}
          onChange={(event) => { props.onChangeHandler(event)}}
        />
        <span className="input-group-text">Yrs</span>
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

export default SalesExecComp;
