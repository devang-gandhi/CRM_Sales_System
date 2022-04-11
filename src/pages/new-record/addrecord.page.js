import React, { useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { AddrecordForm } from '../../components/addrecord-form/addrecord.comp'
import Breadcrum from '../../components/breadcrum/breadcrum.comp'

const intialfrmdata = {
    createdate: "",
    enquiryno: "",
    customername: "",
    details:"",
    amount:"",
    assignedto:""
}

export const Addrecord = () => {

    const [frmdata, setfrmdata] = useState(intialfrmdata);
    useEffect(() => { }, [frmdata])

    const handleon = (e) =>{
        const {name, value} = e.target;

      
        

        setfrmdata({
            ...frmdata,
            [name]: value,
        })
    }

    const submiton = e =>{
        e.preventDefault()
        console.log('form requested', frmdata);
    }

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
                <AddrecordForm submiton={submiton} handleon={handleon} frmdata={frmdata}></AddrecordForm>
            </Col>
        </Row>
    </Container>
  )
}
