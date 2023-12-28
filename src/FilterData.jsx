import React, { Component } from 'react'

export default class FilterData extends Component {
  render() {
    const { filterData, edit, } = this.props;
    //console.log(filterData);
    
    return (
      <>
      <h4>2. Filter Data</h4>
        {filterData.map((task, index) => (
          <div className={task.name === undefined ? "hidden" : ""} key={index}>
              <div className="row mb-3 mt-3" >
                <div className="col-6">
                  <span>
                    <input
                      style={{ cursor: 'pointer' }}
                      type="checkbox"
                      className="form-check-input me-2"
                      onClick={() => this.handleCheckbox(index)}
                    />
                    <span className="h5">{index + 1}. </span>{' '}
                  </span>
                  <span
                    className={
                      task.value === 'Assign'
                        ? 'h5'
                        : 'text-danger text-decoration-line-through h5'
                    }
                  >
                    {task.name}
                  </span>
                </div>
                <div className="col-6 d-flex">
                  <div className="col-4">
                    <span className="h5">Status : </span>
                    <span
                      className={
                        task.value === 'Assign' ? 'badge bg-primary' : 'badge bg-success'
                      }
                    >
                      {task.value === 'Assign' ? 'New' : 'Completed'}
                    </span>
                  </div>
                  <div className="col-4 text-center">
                    {edit === index ? (
                      <i
                        onClick={this.handleEditConfirmation}
                        className="fa-regular fa-check-square"
                        style={{
                          cursor: 'pointer',
                          fontSize: '25px',
                          color: 'green',
                        }}
                      ></i>
                    ) : (
                      <i
                        onClick={() => this.handleEdit(index)}
                        className="fa-regular fa-pen-to-square"
                        style={{
                          cursor: 'pointer',
                          fontSize: '25px',
                          color: 'blue',
                        }}
                      ></i>
                    )}
                  </div>
                  <div
                    className="col-4 d-flex justify-content-center align-items-center"
                    onClick={() => this.handleDel(index)}
                  >
                    <i
                      style={{
                        cursor: 'pointer',
                        fontSize: '25px',
                        color: 'red',
                      }}
                      className="fa-solid fa-trash-can"
                    ></i>
                  </div>
                </div>
              </div>
          </div>
        ))}
      </>
    )
  }
}
