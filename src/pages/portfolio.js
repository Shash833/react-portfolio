import React, { useState } from "react";
import Container from "../components/Container"
import Row from "../components/Row"
import Title from "../components/Title"
import PortfolioItemsContainer from "../components/Alert"
import Dropdown from "../components/Dropdown"
import PortfolioInfo from "../utils/portfolio.json"

function Portfolio() {
    //useState hook with initial value of imported portfolio state
    const [portfolio, setPortfolio] = useState({
        portfolio: PortfolioInfo,
    })

    //useState hook for original portfolio
    const [originalPortfolio] = useState({
        originalPortfolio: PortfolioInfo
    })

    //useState hook for dropdown button label with initial value of 'Filter by technology'
    const [dropdownLabel, setDropdownLabel] = useState("Filter by technology")


    //Filter function to be called when a technology is selected in dropdown list
    const filterTech = (event) => {
        const tech = event.target.innerHTML;
        if (tech === "All") {
            const portfolio = originalPortfolio.originalPortfolio
            setPortfolio({ portfolio: portfolio })
            setDropdownLabel("Filter by technology")
        }
        else {
            const portfolio = originalPortfolio.originalPortfolio.filter((item) => item[tech] === true)
            setPortfolio({ portfolio: portfolio })
            setDropdownLabel(tech)
        }
    }
    // {{ span: 9, offset: 1 }}
    //Portfolio page component
    return <Container>
        <Row>
            <Title>Portfolio</Title>
        </Row>
        <Row>
            <p id="portfolioText"> During my time studying Full-Stack Web Development in the Coding Bootcamp, I have developed skills in creating websites using a variety of technologies including Javascript, JQuery, Node.js, Express.js, MySQL, MongoDB, Handlebars.js and React.js.
                    <br />The projects displayed on this page showcase the technical skills I have learnt and working on these projects allowed me to develop a more in depth understanding of web development and build skills in tackling problems encountered.</p>
        </Row>
        <Row>
            <Dropdown label={dropdownLabel} filter={filterTech} array={["Vanilla Javascript", "JQuery", "Node.js", "Express.js", "MySQL", "MongoDB", "Handlebars.js", "React.js", "All"]} />
        </Row>
        <Row>
            {portfolio.portfolio.map(({ image, title, description, github, link }) => (
                <PortfolioItemsContainer
                    image={image}
                    title={title}
                    description={description}
                    github={github}
                    link={link} />
            ))}</Row>
    </Container >
}

export default Portfolio;
