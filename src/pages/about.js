import React from "react";
import Container from "../components/Container"
import Row from "../components/Row"
import Column from "../components/Column"
import Title from "../components/Title"
import Image from "../components/Image"
import photo from "../assets/images/Shashini.jpg"
import resume from "../assets/Resume.pdf"

function AboutMe() {
    //'About Me' page component
    return <Container>
        <Row>
            <Title>About Me</Title>
        </Row>
        <Row>
            <Column size={4}>
                <Image src={photo} />
            </Column>
            <Column size={8}>
                <p> I am a podiatrist, currently in my fifth year of practice. After completing a Bachelor
                of Health Sciences and Master in Podiatric Practice in 2015, I gained experience in the
                public and private health sector.
                <br />
                    <br />
                I am currently enrolled in a part-time full stack web development bootcamp with Trilogy
                Education and Monash University to study coding which I have chosen to explore as a personal
                challenge and a potential career pathway in the future. During the bootcamp, I have come to thoroughly enjoy the statisfaction of seeing code come together to create websites.
                </p>
                <p><b>Extra information:</b></p>
                <p><a href={resume}>Current resume (pdf)</a></p>
                <p>Git Hub: <a href="https://github.com/Shash833">https://github.com/Shash833</a> </p>
                <p>LinkedIn: <a
                    href="https://www.linkedin.com/in/shashini-mayadunne/">https://www.linkedin.com/in/shashini-mayadunne</a>
                </p>
            </Column>
        </Row>
    </Container>
}

export default AboutMe;