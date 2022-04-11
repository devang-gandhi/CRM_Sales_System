import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import './addrecord.comp.css'
import PropTypes from 'prop-types' 

export const AddrecordForm = ({submiton, handleon, frmdata}) => {
    console.log(frmdata);
  return (
        <div className="jumbotron">
            <h1 className='text-center'>Add new record</h1>
            <hr />
                <Form autoComplete='off' onSubmit={submiton}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}><b>Create Date</b></Form.Label>
                        <Col sm={9}>
                        <Form.Control type='date'  name='createdate' value={frmdata.createdate} onChange={handleon}  required/>
                        </Col>
                    </Form.Group>
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
                        <Form.Control as='textarea' name='details' rows='3' value={frmdata.details} onChange={handleon} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><b>Amount</b></Form.Label>
                        <Form.Control type='number' name='amount' value={frmdata.amount} onChange={handleon} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><b>AssignedTo</b></Form.Label>
                        <Form.Control type='text' name='assignedto' value={frmdata.assignedto} onChange={handleon} minLength='2' required/>
                    </Form.Group>

                    <Button className='alert-primary' type='submit'>Login</Button>
                </Form>
        </div>
  )
}

AddrecordForm.propTypes = {
    handleon: PropTypes.func.isRequired,
    submiton: PropTypes.func.isRequired,
    frmdata: PropTypes.object.isRequired,
};