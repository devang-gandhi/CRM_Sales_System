import React from 'react'
import {useDispatch} from 'react-redux'
import {Form, Row, Col} from 'react-bootstrap'
import {filterRecords} from '../../pages/record-listing/recordAction'


export const Searchrecord = () => {
    
    const dispatch = useDispatch();

    const handleon = e =>{
        const {value} = e.target;
        dispatch(filterRecords(value));
    }

  return (
      <div>
          <Form>
              <Form.Group as={Row}>
                    <Form.Label column sm='3'>
                        Search:{' '}
                    </Form.Label>
                    <Col sm='9'>
                        <Form.Control name='search' onChange={handleon}   placeholder='Search from customername..' />
                    </Col>
              </Form.Group>
          </Form>
      </div>
  )
}
