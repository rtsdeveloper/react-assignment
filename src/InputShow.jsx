import React from "react";

const InputShow = ({data, setData, record, setRecord}) => {
    
    const handleClick = (e) => {
        e.preventDefault();
        if (data.name.trim() === "") {
            alert("Kindly Fill Task in it.");
        } else {
            let rcds = [...record, { ...data }];
            console.log(rcds);
            setRecord(rcds);
            setData({ name: "", value: "Assign" });
        }
    };
    return (
        <>
            <input
                type="button"
                value="Add"
                onClick={handleClick}
                className="btn btn-primary"
            />
        </>
    )
}

export default InputShow
