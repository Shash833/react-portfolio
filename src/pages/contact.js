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
        <Row>
        <p><b>Email:</b> shashini.mayadunne@gmail.com </p>
        <p>Git Hub: <a target = "_blank" href="https://github.com/Shash833">https://github.com/Shash833</a> </p>
        <p>LinkedIn: <a target = "_blank" href="https://www.linkedin.com/in/shashini-mayadunne/">https://www.linkedin.com/in/shashini-mayadunne</a>
        </p>
        </Row>
        <Row>
            <p className="formHeading">Please email any enquiries through this form and I will respond as soon as possible.
            </p>
        </Row>
        <ContactForm />
    </Container>
}

export default Contact;
