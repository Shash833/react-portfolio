import React from "react";
import { Dropdown } from 'react-bootstrap'

function Dropdowns({ label, filter, array }) {
    return (<Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {label}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {array.map((list) => (<Dropdown.Item onClick={filter} key={list}>{list}</Dropdown.Item>))}
        </Dropdown.Menu>
    </Dropdown>)
}

export default Dropdowns;
