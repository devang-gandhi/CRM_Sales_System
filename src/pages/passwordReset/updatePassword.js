import React, {  useState } from 'react'
import { Col, Container, Row, Form, Button, Spinner, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword } from './passwordAction'
import './passwordReset.css';

const initialState={
    pin:'',
    password:'',
    cpassword:'',
}

const passValidation={
    isLenthy: false,
    hasLower: false,
    hasUpper: false,
    hasNumber: false,
    hasSpclChr: false,
    confirmpass: false,
}

const Updatepassword = () => {

    const dispatch = useDispatch();
    const [newpass, setnewpass] = useState(initialState);
    const [passError, setpassError] = useState(passValidation);
    const {isLoading, status, message, email} = useSelector(state=> state.password);


    const onchange= (e)=>{
        const {name, value} = e.target;
        setnewpass({...newpass, [name]: value})

        if(name === 'password'){
            const isLenthy= value.length >= 8;
            const hasLower= /[a-z]/.test(value);
            const hasUpper= /[A-Z]/.test(value);
            const hasNumber= /[0-9]/.test(value);
            const hasSpclChr= /[@ # $ % ^ & * -]/.test(value);

            setpassError({...passError, isLenthy, hasLower, hasUpper, hasNumber, hasSpclChr});
        }

        if(name === 'cpassword'){  
            setpassError({...passError, confirmpass:newpass.password === value});
        }
    }

    const onsubmit=(e)=>{
        e.preventDefault();
        const {pin, password} = newpass;
        console.log(pin, password);
        const passObj ={
            pin, newpassword:password, email,
        }
        dispatch(updatePassword(passObj));
    }

  return (
    <div className='page bg-info'>
        <div className="mt-5">
            <div className="jumbotron">
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-info text-center'>Update Password</h1>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                        {message && <Alert variant={status === 'success' ? 'success' : 'danger'}>{message}</Alert>} 
                        {isLoading && <Spinner variant='info' animation='border'/>}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form onSubmit={onsubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label><b>Password Reset OTP</b></Form.Label>
                                    <Form.Control type="number" name='pin' value={newpass.pin} onChange={onchange} placeholder="OTP" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label><b>Password</b></Form.Label>
                                    <Form.Control type="password" name='password' value={newpass.password} onChange={onchange} placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label><b>Confirm Password</b></Form.Label>
                                    <Form.Control type="password" name='cpassword' value={newpass.cpassword} onChange={onchange} placeholder="Confirm Password" />
                                </Form.Group>

                                <Form.Text>
                                    {!passError.confirmpass && (<div className="text-danger mb-3">Password doesn't match!</div>) }
                                </Form.Text>

                                <ul className='py-3'>
                                    <li className={passError.isLenthy ? 'text-success' : 'text-danger'}>Min 8 Characters</li>
                                    <li className={passError.hasUpper ? 'text-success' : 'text-danger'}>At least One Upper Character</li>
                                    <li className={passError.hasLower ? 'text-success' : 'text-danger'}>At least One Lower Character</li>
                                    <li className={passError.hasNumber ? 'text-success' : 'text-danger'}>At least One Number</li>
                                    <li className={passError.hasSpclChr ? 'text-success' : 'text-danger'}>At least One Special Character [@ # $ % ^ & * -]</li>
                                </ul>

                                <Button variant="primary" type="submit" disabled={Object.values(passError).includes(false)}>
                                    Update
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row className='py-3'>
                        <Col>
                            <a href='/'>Back to Login!</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </div>
  )
}

export default Updatepassword
