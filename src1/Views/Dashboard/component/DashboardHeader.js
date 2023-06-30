import React from 'react'
import Select from 'react-select';
import "./dashboard-header.css"

const DashboardHeader = () => {
  return (
    <div className='dashboard-header-top'>
      <div className='row'>
        <div className='col-12 col-lg-3'>
          <div className='web-account-mt align-items-center'>
            <h3 className='title-account mb-0 me-4'>Account</h3>
            <div className='webslect-control'>
              <select className='form-control control-select-web'>
                <option>NG</option>
              </select>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-6'>
          <div className='date-fill-area'>
            <div className='date-flex-col me-3'>
              <div className='input-group align-items-end'>
                <label className='txt-label'>Start date</label>
                <div className='date-area-web'><input type='date' className='form-control date-control' placeholder='12/12/2022' /></div>
              </div>
            </div>
            <div className='date-flex-col'>
              <div className='input-group align-items-end'>
                <label className='txt-label'>End date</label>
                <div className='date-area-web'><input type='date' className='form-control date-control' placeholder='19/12/2022' /></div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-3'>
          <div className='form-button text-end'>
            <button type='button' className='btn btn-apply me-2'>Apply</button>
            <button type='button' className='btn btn-Reset'>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader