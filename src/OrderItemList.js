import React from 'react';

function OrderItemList(props) {
    return (
        <div className="shadow m-4 p-3" onClick={() => {props.getSelected(props.idx)}}>
            <div className="w-100 d-flex justify-content-between">
                <div className="fw-bold fs-5">{props.data.customerName}</div>
                <span className="badge bg-warning rounded-pill my-auto">{props.data.OrderId}</span>
            </div>
            <hr />
            <div>
                <span className="fw-bold">Contact No: </span>
                <span className="text-muted">{props.data.customerCntctNmbr}</span>
            </div>
            <hr />
            <div className="fs-5 fw-bold my-2">Products</div>
            <ol className="list-group list-group-numbered">
                {
                    props.data.products.map((ele, index) => {
                        return (<li className="list-group-item d-flex justify-content-between align-items-start" key={index}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{ele.productName}</div>
                                            {`Unit Price: ${ele.unitPrice}`}
                                        </div>
                                    <span className="badge bg-primary rounded-pill text-center">{ele.quantity}</span>
                                </li>);
                    })
                }
            </ol>
            <hr />
            <div className=" fs-6 badge bg-secondary">
                <span className="fw-bold">Total: </span>
                <span>{props.data.totalAmount}</span>
            </div>
        </div>
    );
}

export default OrderItemList;