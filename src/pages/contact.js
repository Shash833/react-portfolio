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
            <p className="formHeading">Please email any enquiries through this form and I will respond as soon as possible.
            </p>
        </Row>
        <ContactForm />
    </Container>
}

export default Contact;