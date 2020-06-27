import React from "react";
import { Col } from 'react-bootstrap'

function Column(props) {
    return <Col md={props.size}>
        {props.children}
    </Col>
}

export default Column;
