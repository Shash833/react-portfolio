import React from "react";
import Container from "../components/Container"
import Row from "../components/Row"
import Column from "../components/Column"
import Title from "../components/Title"
import Image from "../components/Image"
import photo from "../assets/images/Shashini.jpg"

function AboutMe() {
    //'About Me' page component
    return <Container>
        <Row>
            <Title>About Me</Title>
        </Row>
        <hr />
        <Row>
            <Column size={4}>
                <Image src={photo} />
            </Column>
            <Column size={8}>
                <div id="about-me">
                    <p>
                        I am a Full Stack Web Developer, recently having completed a Coding Bootcamp with Trilogy
                        Education and Monash University. During the bootcamp, I have come to thoroughly enjoy the statisfaction of solving problems and seeing code come together to create websites and I am excited to further develop my skills and explore a furture career as Web Developer.
                </p>
                    <p>
                        I am currently working as a podiatrist, in my fifth year of practice, after completing a Bachelor of Health Sciences and Master in Podiatric Practice in 2015.
                        In my spare time I enjoy cooking, reading, board games and travelling.
                </p>
                </div>

            </Column>
        </Row>
    </Container>
}

export default AboutMe;
