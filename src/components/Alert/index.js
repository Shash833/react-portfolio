import React from "react";
import { Alert } from 'react-bootstrap'
import Column from "../Column"
import Row from "../Row"
import Image from "../Image"
import "./style.css";


function Alerts({ title, image, description, technologies, github, link }) {
    return <Alert variant="secondary">
        <Row>
            <Column size={3}>
                <Image src={image} />
            </Column>
            <Column size={9}>
                <h5>{title}</h5>
                <p>
                    {description}
                </p>
                <p><b>Technologies: </b> {technologies}</p>
                <p><b>Git-Hub: </b><a target="_blank" rel="noopener noreferrer" href={github}>{github}</a></p>
                <p><b>Link: </b><a target="_blank" rel="noopener noreferrer" href={link === "N/A" ? false : link}>{link}</a></p>
            </Column>
        </Row>
    </Alert>
}

export default Alerts;
