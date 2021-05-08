import React from 'react';

function MedicineItemList(props) {
    return (
        <div className="shadow m-4 p-3" onClick={() => {props.getSelected(props.idx)}}>
            <div className="w-100 d-flex justify-content-between">
                <div className="fw-bold fs-5">{props.data.name}</div>
                <span className="badge bg-warning rounded-pill my-auto">{props.data.stock}</span>
            </div>
            <hr />
            <div>
                <span className="fw-bold">Manufacturer's Name: </span>
                <span className="text-muted fst-italic">{props.data.manufacturerName}</span>
            </div>
            <div>
                <span className="fw-bold">Price: </span>
                <span className="text-muted">{props.data.price}</span>
            </div>
            <div>
                <span className="fw-bold">Discount: </span>
                <span className="text-muted">{props.data.discount}</span>
            </div>
        </div>
    );
}

export default MedicineItemList;