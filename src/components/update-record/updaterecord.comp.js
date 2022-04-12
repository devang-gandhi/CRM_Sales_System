import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { replyOnRecord } from '../../pages/record-listing/recordAction';
import PropTypes from 'prop-types'

export const Updaterecord = ({_id}) => {

  const dispatch = useDispatch();
  const [message, setmessage] = useState('');
  const {user:{name}} = useSelector(state => state.user);

  const handleon = e =>{
    setmessage(e.target.value);
  }

  const submiton= (e) => {
    e.preventDefault();
    const msgObj={
      message, 
      messageby:name,
    };
    dispatch(replyOnRecord(_id, msgObj));
    setmessage('');
  };

  return (
    <div>
    <Form onSubmit={submiton}>
        <Form.Label>Reply</Form.Label>
        <Form.Control as='textarea' row='5' name='detail' value={message} onChange={handleon}/>
        <div className="text-right mb-4 mt-3">
            <Button className='alert-primary' type='submit' style={{'marginRight`': 'auto'}}>Reply</Button>
        </div>
    </Form>
    </div>
  )
}

Updaterecord.propTypes={
  _id: PropTypes.string.isRequired,
}