import React from "react";
import Container from "../components/Container"
import Row from "../components/Row"
import Title from "../components/Title"
import ContactForm from "../components/ContactForm"

function Contact() {
    //Contact page component
    return <Container>
        <Row>
            <Title>Contact</Title>
        </Row>
        <hr />
        <Row>
            <div id="contact-info">
                <p><b>Email:</b> shashini.mayadunne@gmail.com </p>
                <p><b>Git Hub: </b><a target="_blank" rel="noopener noreferrer" href="https://github.com/Shash833">https://github.com/Shash833</a> </p>
                <p><b>LinkedIn:</b> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shashini-mayadunne/">https://www.linkedin.com/in/shashini-mayadunne</a>
                </p>
            </div>
        </Row>
        <hr />
        <p className="formHeading"><b>Please email any enquiries through this form and I will respond as soon as possible:</b>
        </p>
        <ContactForm />
    </Container>
}

export default Contact;
