import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

const initialState ={
    name:'',
    email:'',
    companyname:'',
    address:'',
    phone:'',
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

const RegistrationForm = () => {

    const [user, setuser] = useState(initialState);
    const [passError, setpassError] = useState(passValidation);

    useEffect(()=>{},[user]);

    const onchange= (e)=>{
        const {name, value} = e.target;
        setuser({...user, [name]: value})

        if(name === 'password'){
            const isLenthy= value.length >= 8;
            const hasLower= /[a-z]/.test(value);
            const hasUpper= /[A-Z]/.test(value);
            const hasNumber= /[0-9]/.test(value);
            const hasSpclChr= /[@ # $ % ^ & * -]/.test(value);

            setpassError({...passError, isLenthy, hasLower, hasUpper, hasNumber, hasSpclChr});
        }

        if(name === 'cpassword'){  
            setpassError({...passError, confirmpass:user.password === value});
        }
    }

    const onsubmit=(e)=>{
        e.preventDefault();
        console.log(user);
    }

  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-center'>User Registration</h1>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <Form onSubmit={onsubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label><b>Full Name</b></Form.Label>
                        <Form.Control type="text" name='name' value={user.name} onChange={onchange} placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><b>Email Address</b></Form.Label>
                        <Form.Control type="email" name='email' value={user.email} onChange={onchange} placeholder="Your Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><b>Company Name</b></Form.Label>
                        <Form.Control type="text" name='companyname' value={user.companyname} onChange={onchange} placeholder="Company Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><b>Address</b></Form.Label>
                        <Form.Control type="text" name='address' value={user.address} onChange={onchange} placeholder="Full Address" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><b>Contact Number</b></Form.Label>
                        <Form.Control type="number" name='phone' value={user.phone} onChange={onchange} placeholder="Contact Number" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" name='password' value={user.password} onChange={onchange} placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><b>Confirm Password</b></Form.Label>
                        <Form.Control type="password" name='cpassword' value={user.cpassword} onChange={onchange} placeholder="Confirm Password" />
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
                        Register
                    </Button>
                </Form>
            </Col>
        </Row>

        <Row className='py-3'>
            <Col>
                Already have an account? <a href='/'>Login Now!</a> 
            </Col>
        </Row>
    </Container>
  )
}

export default RegistrationForm
