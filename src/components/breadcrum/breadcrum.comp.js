import React from 'react'
import {Breadcrumb} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Breadcrum = ({page}) => {
  return (
    <Breadcrumb>
      <LinkContainer to="/dashboard">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </LinkContainer>
        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Breadcrum
