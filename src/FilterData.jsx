import React, { Component } from 'react'

export default class FilterData extends Component {

  render() {
    const { filterData } = this.props;
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
