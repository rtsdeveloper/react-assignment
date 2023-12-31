import React, { useState } from 'react'
import InputSave from './Component/InputSave'
import InputShow from './Component/InputShow';
import ShowRecord from './Component/ShowRecord';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const [data, setData] = useState({ name: "", value: "Assign", id:uuidv4().slice(0, 4) });
    const [record, setRecord] = useState([])
    return (
        <div className='mt-5' >
            <h4>To-Do Task</h4>
            <InputSave
                data={data}
                setData={setData}
                record={record}
                setRecord={setRecord}
            />
            <InputShow
                data={data}
                setData={setData}
                record={record}
                setRecord={setRecord}
            />
            <ShowRecord
                data={data}
                setData={setData}
                record={record}
                setRecord={setRecord}
            />
        </div>
    )
}

export default App
