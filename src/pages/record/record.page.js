import React, { useEffect } from 'react'
import {Container, Row, Col, Button, Spinner, Alert} from 'react-bootstrap'
import Breadcrum from '../../components/breadcrum/breadcrum.comp'
import { Conversation } from '../../components/conversation/conversation.comp';
import { Updaterecord } from '../../components/update-record/updaterecord.comp';
import {useParams} from 'react-router-dom'
import { closeRecord, fetchSingleRecord } from '../record-listing/recordAction';
import { useDispatch, useSelector } from 'react-redux';
import { resetMsg } from '../record-listing/recordSlice';

export const Record = () => {

    const {rId} = useParams()
    const dispatch = useDispatch();
    const {isLoading, error, selectedRecord, replyRecordError ,replyMsg} = useSelector(state => state.records)
    

    useEffect(() => {
        dispatch(fetchSingleRecord(rId))

        return ()=>{
            (replyMsg || replyRecordError) && dispatch(resetMsg())
        }
    } , [ rId, dispatch, replyMsg, replyRecordError]);

  return (
    <Container>
        <Row>
            <Col>
                <Breadcrum page='Record'/>
            </Col>
        </Row>
        <Row>
            <Col>
                {isLoading && <Spinner variant='primary' animation='border'/>}
                {error && <Alert variant='danger'>{error}</Alert>}
                {replyRecordError && <Alert variant='danger'>{replyRecordError}</Alert>}
                {replyMsg && <Alert variant='success'>{replyMsg}</Alert>}
            </Col>
        </Row>
        <Row>
            <Col className='font-weight-bolder text-secondary'>
                <div className="createdate">CreateDate :{selectedRecord.createdate && new Date(selectedRecord.createdate).toLocaleString()}</div>
                <div className="enquiryno">EnquiryNo :{selectedRecord.enquiryno}</div>
                <div className="customername">CustomerName: {selectedRecord.customername}</div>
                <div className="enquiry">Enquiry: {selectedRecord.enquiry}</div>
                <div className="amount">Amount: {selectedRecord.amount}</div>
                <div className="assignedto">AssignedTo: {selectedRecord.assignedto}</div>
                <div className="status">Status: {selectedRecord.status}</div>
            </Col>
            <Col >
                <Button variant='outline-primary' style={{'marginLeft':'410px'}} onClick={()=>dispatch(closeRecord(rId))} disabled={selectedRecord.status==='Closed'}>Close Record</Button>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                {selectedRecord.history && <Conversation msg={selectedRecord.history}/>}
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                <Updaterecord _id={rId}/>
            </Col>
        </Row>

    </Container>
  )
}
