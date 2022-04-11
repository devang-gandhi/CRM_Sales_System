import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {fetchAllRecords} from './recordAction';
import {Container, Row, Col, Button} from 'react-bootstrap'
import Breadcrum from '../../components/breadcrum/breadcrum.comp'
import Recordtable from '../../components/record-table/recordtable.comp'
import { Searchrecord } from '../../components/search-record/searchrecord'
import {Link} from 'react-router-dom'

export const Recordlist = () => {
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllRecords());
    }, [dispatch])


  return (
    <Container>
        <Row>
            <Col>
                <Breadcrum page='Record lists'/>
            </Col>
        </Row>

        <Row className='mt-4'>
            <Col>
                <Link to='/addrecord'>
                    <Button className='alert-primary'>Add new record</Button>
                </Link>
            </Col>
            <Col className='text-right mt-3'>
                <Searchrecord />
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <Recordtable/>
            </Col>
        </Row>
        
    </Container>
  )
}
