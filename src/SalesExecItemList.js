import React from 'react';

function SalesExecItemList(props) {
    return (
        <div className="shadow m-4 p-3" onClick={() => {props.getSelected(props.idx)}}>
            <div className="w-100 d-flex justify-content-between">
                <div className="fw-bold fs-5">{`${props.data.firstName} ${props.data.lastName}`}</div>
            </div>
            <hr />
            <div>
                <span className="fw-bold">D.O.B: </span>
                <span className="text-muted fst-italic">{props.data.dob}</span>
            </div>
            <div>
                <span className="fw-bold">Gender: </span>
                <span className="text-muted">{props.data.gender}</span>
            </div>
            <div>
                <span className="fw-bold">Experience: </span>
                <span className="text-muted">{props.data.experience}</span>
            </div>
        </div>
    );
}

export default SalesExecItemList;