import React from 'react';

const Title = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center mb-3 text-white" style={{height:"150px",backgroundColor:"#BB2D3B"}}>
            <h2>{props.name} </h2>
        </div>
    );
};

export default Title;