import React, { Component } from 'react'

export default class FilterData extends Component {
  handleCheckbox = (index) => {
    const { record, setRecord } = this.props;
    const updatedRecord = [...record];
    updatedRecord[index].value = updatedRecord[index].value === 'Assign' ? 'Completed' : 'Assign';
    setRecord(updatedRecord);
  };

  handleEdit = (index) => {
    const { setEdit, setData, record } = this.props;
    setEdit(index);
    setData(record[index]);
  };

  handleEditConfirmation = () => {
    const { edit, setRecord, setData, data } = this.props;
    const { record } = this.props;
    const updatedRecord = [...record];
    updatedRecord[edit] = data;
    setRecord(updatedRecord);
    setEdit(null);
    setData({ name: '', value: 'Assign' });
  };

  handleDel = (index) => {
    const { record, setRecord, setData } = this.props;
    const deleteFilter = record.filter((_, i) => i !== index);
    setRecord(deleteFilter);
    setData({ name: '', value: 'Assign' });
  };

  render() {
    const { filterData, edit } = this.props;
    return (
      <>
        <h4>2. Filter Data</h4>
        {filterData.map((task, index) => (
          <div className="row mb-3 mt-3" key={index}>
            <div className="col-6">
              <div>
                <span className="h5">{index + 1}. </span>{' '}
                <span className='h4'>
                  {task.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }
}
