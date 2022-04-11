import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Recordtable  from '../../components/record-table/recordtable.comp'
import records from '../../assets/data/records.json'
import  Breadcrum  from '../../components/breadcrum/breadcrum.comp'
import {Link, useNavigate} from 'react-router-dom';


export const Dashboard = () => {
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
                <div>Total sales records: 50</div>
                <div>Pending records: 5</div>
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
                <Recordtable records={records}/> 
            </Col>
        </Row>
    </Container>
  );
};
