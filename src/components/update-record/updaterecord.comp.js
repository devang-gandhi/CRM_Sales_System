import React from 'react'
import {Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

export const Updaterecord = ({msg, handleon, submiton}) => {
  return (
    <Form onSubmit={submiton}>
        <Form.Label>Reply</Form.Label>
        <Form.Control as='textarea' row='5' name='detail' value={msg} onChange={handleon}/>
        <div className="text-right mb-4 mt-3">
            <Button className='alert-primary' type='submit' style={{'marginRight`': 'auto'}}>Reply</Button>
        </div>
    </Form>
  )
}

Updaterecord.propTypes={
    submiton: PropTypes.func.isRequired,
    handleon: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
}