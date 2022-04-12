import React, { useEffect } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Recordtable  from '../../components/record-table/recordtable.comp'
import  Breadcrum  from '../../components/breadcrum/breadcrum.comp'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecords } from '../record-listing/recordAction';



export const Dashboard = () => {
    const dispatch = useDispatch();
    const {records} = useSelector(state => state.records);

    useEffect(() => {
        dispatch(fetchAllRecords());
    }, [dispatch]);


  return (
    <Container>
        <Row>
            <Col>
                <Breadcrum page="Dashboard"></Breadcrum>
            </Col>
        </Row>

        <Row>
            <Col className='text-center mt-5 mb-2'>
                <Link to='/addrecord'>
                    <Button variant='info' style={{'fontSize':'2rem', 'padding':'10px 30px'}}>Add new sales record</Button>
                </Link>
            </Col>
        </Row>

        <Row>
            <Col className='text-center mb-2'>
                <div>Total sales records: {records.length} </div>
                {/* <div>Pending records: {records.filter(row=> row.status === 'Closed')} </div> */}
            </Col>
        </Row>

        <Row>
            <Col className='mt-2'>
                Recently added records
            </Col>
        </Row>

        <hr />

        <Row>
            <Col className='recent-record'>
                <Recordtable/> 
            </Col>
        </Row>
    </Container>
  );
};
