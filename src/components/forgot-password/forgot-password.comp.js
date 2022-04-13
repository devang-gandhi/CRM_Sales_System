import React, { useState } from 'react'
import {Container, Row, Col, Form, Button, Alert, Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { sendResetOTP } from '../../pages/passwordReset/passwordAction';
import '../login/login.css'

export const ForgotPassword = () => {

    const dispatch = useDispatch();
    const [email, setemail] = useState('');
    const {isLoading, status, message} = useSelector(state => state.password);
    
    const submiton = e =>{
        e.preventDefault();
        dispatch(sendResetOTP(email));
    };
    
    const handleon = e =>{
        const { value} = e.target;
        setemail(value);
    };

  return (
    <div className='entry-page bg-info'>
        <div className="jumbotron">
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-info text-center'>Reset Password</h1>
                        <hr />
                        {message && <Alert variant={status === 'success' ? 'success' : 'danger'}>{message}</Alert>}
                        {isLoading && <Spinner variant='primary' animation='border'/>}
                        <Form autoComplete='off' onSubmit={submiton}>
                            <Form.Group>
                                <Form.Label><b>Email</b></Form.Label>
                                <Form.Control type='email' name='email' value={email} onChange={handleon} placeholder='Enter email..' required/>
                            </Form.Group>

                            <Button className='alert-primary' type='submit'>Reset</Button>
                        </Form>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href="/">Back to Login!</a>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
};
