import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { AddrecordForm } from '../../components/addrecord-form/addrecord.comp'
import Breadcrum from '../../components/breadcrum/breadcrum.comp'



export const Addrecord = () => {

  return (
    <Container>
        <Row>
            <Col>
                <Breadcrum page='New record'></Breadcrum>
            </Col>
        </Row>
        <Row>
            <Col>
            </Col>
        </Row>
        <Row>
            <Col>
                <AddrecordForm ></AddrecordForm>
            </Col>
        </Row>
    </Container>
  )
}
