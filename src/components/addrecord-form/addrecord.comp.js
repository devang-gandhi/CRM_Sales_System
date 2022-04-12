import React, {useState, useEffect} from 'react'
import {Form, Button, Alert, Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './addrecord.comp.css'
import { openNewRecord } from './addRecordAction'
// import PropTypes from 'prop-types' 

const intialfrmdata = {
    enquiryno: "",
    customername: "",
    enquiry:"",
    amount:"",
    assignedto:""
}

export const AddrecordForm = () => {
    const dispatch = useDispatch();
    const {isLoading, error, successMsg} = useSelector(state => state.openRecord);
    const [frmdata, setfrmdata] = useState(intialfrmdata);

    useEffect(() => { }, [frmdata])
    const handleon = (e) =>{
        const {name, value} = e.target;
        setfrmdata({
            ...frmdata,
            [name]: value,
        })
    }

    const submiton = e =>{
        e.preventDefault();
        dispatch(openNewRecord(frmdata));
    }


  return (
        <div className="jumbotron">
            <h1 className='text-center'>Add new record</h1>
            <hr />
            <div>
                {error && <Alert variant='danger' >{error}</Alert>}
                {successMsg && <Alert variant='success' >{successMsg}</Alert>}
                {isLoading && <Spinner variant='primary' animation='border'/>}
            </div>
                <Form autoComplete='off' onSubmit={submiton}>
                    <Form.Group>
                        <Form.Label><b>EnquiryNo</b></Form.Label>
                        <Form.Control type='number' name='enquiryno' value={frmdata.enquiryno} onChange={handleon} minLength='5' required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><b>Customer Name</b></Form.Label>
                        <Form.Control type='text' name='customername' value={frmdata.customername} onChange={handleon} minLength='2' required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><b>Enquiry</b></Form.Label>
                        <Form.Control as='textarea' name='enquiry' rows='3' value={frmdata.enquiry} onChange={handleon} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><b>Amount</b></Form.Label>
                        <Form.Control type='number' name='amount' value={frmdata.amount} onChange={handleon} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><b>AssignedTo</b></Form.Label>
                        <Form.Control type='text' name='assignedto' value={frmdata.assignedto} onChange={handleon} minLength='2' />
                    </Form.Group>

                    <Button className='alert-primary' type='submit'>Add new Record</Button>
                </Form>
        </div>
  )
}

// AddrecordForm.propTypes = {
//     handleon: PropTypes.func.isRequired,
//     submiton: PropTypes.func.isRequired,
//     frmdata: PropTypes.object.isRequired,
// };