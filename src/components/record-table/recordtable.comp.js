import React from 'react'
import {useSelector} from 'react-redux'
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Recordtable = () => {

  const {searchRecordList, isLoading, error} = useSelector(state=> state.records);

  if(isLoading) return <h1>Loading...</h1>
  if(error) return <h1>{error}</h1>
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Create Date</th>
          <th>Enquiry No</th>
          <th>Customer Name</th>
          <th>Enquiry</th>
          <th>Amount</th>
          <th>Assigned To</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {searchRecordList.length ? (searchRecordList.map((row)=>
                  <tr key={row._id}>
                  <td><Link to={`/record/${row._id}`}>{row._id}</Link></td>
                  <td>{row.createdate}</td>
                  <td>{row.enquiryno}</td>
                  <td>{row.customername}</td>
                  <td>{row.enquiry}</td>
                  <td>{row.amount}</td>
                  <td>{row.assignedTo}</td>
                  <td>{row.status}</td>  
                </tr>)) :
                <tr>
                  <td colSpan='8' className='text-center'>No sales records found:(</td>
                </tr>
        }
      </tbody>
    </Table>
  )
}


export default Recordtable