import React from "react"

import { Container } from "./style"
import Header from "../Header/Header"
import Banner from "../Banner/Banner"
import Contact from "../Contact/Contact"
import Projects from "../Projects/Projects"

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Contact />
      <Projects />
    </Container>
  )
}

export default Home
