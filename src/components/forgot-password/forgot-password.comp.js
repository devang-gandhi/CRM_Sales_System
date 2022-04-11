import React from 'react'
import PropTypes  from 'prop-types'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import '../login/login.css'


export const ForgotPassword = ({handleon, submiton, frmswitch, email}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-center'>Reset Password</h1>
                <hr />
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
                <a href="#!" onClick={() => frmswitch('login')}>Back to Login!</a>
            </Col>
        </Row>
    </Container>
  )
};

ForgotPassword.propTypes = {
    handleon : PropTypes.func.isRequired,
    submiton : PropTypes.func.isRequired,
    frmswitch : PropTypes.func.isRequired,
    email : PropTypes.string.isRequired,
};
