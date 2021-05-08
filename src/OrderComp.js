import React from "react";

function OrderComp(props) {
  return (
    <div className="container-fluid shadow p-5 ">
      <div className="input-group mb-3">
        <span className="input-group-text">Order ID:</span>
        <input
          type="text"
          id="OrderId"
          className="form-control"
          value={props.data.OrderId}
          onChange={(event) => {
            props.onChangeHandler(event);
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Customer Name</span>
        <input
          type="text"
          id="customerName"
          className="form-control"
          value={props.data.customerName}
          onChange={(event) => {
            props.onChangeHandler(event);
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Customer No:</span>
        <input
          type="text"
          id="customerCntctNmbr"
          className="form-control"
          value={props.data.customerCntctNmbr}
          onChange={(event) => {
            props.onChangeHandler(event);
          }}
        />
      </div>
      <div className="fs-6">Products</div>
      <hr />
      <div className="w-75 mx-auto mb-4">
        <ol className="list-group list-group-numbered">
          {props.data.products.map((ele, index) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-start"
                key={index}
              >
                <div className="ms-2 me-auto w-75">
                  <div className="fw-bold">{ele.productName}</div>
                  {`Unit Price: ${ele.unitPrice}`}
                  <div className="w-100 d-flex justify-content-evenly">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => {
                        props.onProdEditHandler(index);
                      }}
                    >
                      <i className="bi bi-pencil"></i> Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        props.onProdDelHandler(index);
                      }}
                    >
                      <i className="bi bi-eraser"></i> Delete
                    </button>
                  </div>
                </div>
                <span className="badge bg-primary rounded-pill text-center">
                  {ele.quantity}
                </span>
              </li>
            );
          })}
        </ol>
        <div className="mt-4">
          <div className="input-group mb-3">
            <span className="input-group-text">Name </span>
            <input
              type="text"
              id="prodName"
              className="form-control"
              value={props.data.prodName}
              onChange={(event) => {
                props.onChangeHandler(event);
              }}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Unit Price</span>
            <input
              type="text"
              id="prodUnitPrice"
              className="form-control"
              value={props.data.prodUnitPrice}
              onChange={(event) => {
                props.onChangeHandler(event);
              }}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Quantity </span>
            <input
              type="text"
              id="prodQty"
              className="form-control"
              value={props.data.prodQty}
              onChange={(event) => {
                props.onChangeHandler(event);
              }}
            />
          </div>
          <div className="d-flex justify-content-evenly">
            <button
              className="btn btn-success"
              onClick={() => {
                props.onProdNewHandler();
              }}
            >
              <i className="bi bi-plus"></i> Add Product
            </button>
          </div>
        </div>
      </div>

      <hr />
      <div className=" fs-5 mb-3 badge bg-secondary">
        <span className="fw-bold">Total: </span>
        <span>{props.data.totalAmount}</span>
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
            className="btn btn-dark"
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

export default OrderComp;
