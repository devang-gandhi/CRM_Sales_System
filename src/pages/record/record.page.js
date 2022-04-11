import React, { useState, useEffect } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Breadcrum from '../../components/breadcrum/breadcrum.comp'
import records from '../../assets/data/records.json'
import { Conversation } from '../../components/conversation/conversation.comp';
import { Updaterecord } from '../../components/update-record/updaterecord.comp';
import {useParams, Link} from 'react-router-dom'

export const Record = () => {

    const {rId} = useParams()
    const [message, setmessage] = useState('')
    const [record, setrecord] = useState({})
    console.log(record);
    useEffect(() => {
            for (let i = 0; i < records.length; i++) {
            if(records[i].id.toString() === rId){
                setrecord(records[i])
                break
            }
        }
    } , [message, rId])

    

    const handleon = e =>{
        setmessage(e.target.value);
    }

    const submiton= () => {
        alert('Form submited!');
    }
    console.log(useParams());
  return (
    <Container>
        <Row>
            <Col>
                <Breadcrum page='Record'/>
            </Col>
        </Row>
        <Row>
            <Col className='font-weight-bolder text-secondary'>
                <div className="createdate">CreateDate :{record.CreateDate}</div>
                <div className="enquiryno">EnquiryNo :{record.EnquiryNo}</div>
                <div className="customername">CustomerName: {record.CustomerName}</div>
                <div className="enquiry">Enquiry: {record.Enquiry}</div>
                <div className="amount">Amount: {record.Amount}</div>
                <div className="assignedto">AssignedTo: {record.AssignedTo}</div>
                <div className="status">Status: {record.Status}</div>
            </Col>
            <Col >
                <Link to='/recordlist'>
                    <Button variant='outline-primary' style={{'marginLeft':'410px'}}>Close Record</Button>
                </Link>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                {record.History && <Conversation msg={record.History}/>}
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                <Updaterecord msg={message} handleon={handleon} submiton={submiton}/>
            </Col>
        </Row>

    </Container>
  )
}
