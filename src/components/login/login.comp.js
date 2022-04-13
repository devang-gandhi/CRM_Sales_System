import React, { useState} from 'react'
import PropTypes  from 'prop-types'
import {Container, Row, Col, Form, Button, Spinner, Alert} from 'react-bootstrap'
import './login.css'
import {loginPending, loginSuccess, loginFail} from './loginSlice'
import {useDispatch, useSelector} from 'react-redux'
import {userLogin} from '../../apis/userApis'
import {useNavigate} from 'react-router-dom'
import {getUserProfile} from '../../pages/dashboard/userAction'

export const LoginForm = ({ frmswitch}) => {

    const dispatch = useDispatch();
    const redirect = useNavigate();
    const {isLoading, error} = useSelector(state=> state.login);

    // useEffect(()=>{
    //   sessionStorage.getItem('accessJWT') && redirect('/dashboard')
    // },[redirect]);

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
  
    const handleon = e =>{
      const {name, value} = e.target
      switch(name){
        case 'email':
          setemail(value)
          break
  
        case 'password':
          setpassword(value)
          break
  
          default:
            break
      }
    };
  
    const submiton =async (e) => {
      e.preventDefault();
  
      if(!email || !password){
        alert("Form must be filled in order to loggin in..");
      }
      dispatch(loginPending());

      try {
          const Auth = await userLogin({email, password});
          
          if(Auth.status === 'error'){
            return dispatch(loginFail(Auth.message));
          }
          dispatch(loginSuccess());
          dispatch(getUserProfile());
          redirect('/dashboard');
      } catch (error) {
          dispatch(loginFail(error.message));
      }
    }; 
   
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-center'>Customer Login</h1>
                <hr />
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form autoComplete='off' onSubmit={submiton}>
                    <Form.Group>
                        <Form.Label><b>Email</b></Form.Label>
                        <Form.Control type='email' name='email' value={email} onChange={handleon} placeholder='Enter email..' required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type='password' name='password' value={password} onChange={handleon} placeholder='Password..' required/>
                    </Form.Group>

                    <Button className='alert-primary' type='submit'>Login</Button>
                    {isLoading && <Spinner variant='primary' animation='border'/>}
                </Form>
                <hr />
            </Col>
        </Row>

        <Row>
            <Col>
                <a href="/password-reset">Forgot Password?</a>
            </Col>
        </Row>

        <Row className='py-3'>
            <Col>
              If you are new here? <a href="/registration" >Register Now!</a>
            </Col>
        </Row>
    </Container>
  )
};

LoginForm.propTypes = {

    frmswitch : PropTypes.func.isRequired,

};
