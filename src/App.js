import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"

function App() {
  return (
    //Header (which includes Navbar) to be rendered to HTML. Routes to page components also defined.
    <Router>
      <>
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </>
    </Router>

  );
}

export default App;
