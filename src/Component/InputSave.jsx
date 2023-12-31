import React from 'react'

const InputSave = ({ data, setData, record, setRecord }) => {

    const handleSave = (e) => {
        setData({ ...data, [e.target.name]: e.target.value})
    }

    return (
        <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleSave}
        />
    )
}

export default InputSave
