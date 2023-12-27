import React, { useState } from "react";

const InputAdd = ({data,setData}) => {

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <>
            <input
                data={data}
                setData={setData}
                type="text"
                name="name"
                value={data.name}
                className="form-control-sm"
                onChange={handleChange}
            />
        </>
    )
}

export default InputAdd;
