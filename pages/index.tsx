import type { NextPage } from "next";
import { Fragment } from "react";
import styled from "styled-components";
import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Counters from "../components/Counters";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";

const MainLayout = styled.div``;

const Home: NextPage = () => {
  return (
    <Fragment>
      <MainLayout>
        <NavBar />
        <About />
        <Banner />
        <Counters />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </MainLayout>
    </Fragment>
  );
};

export default Home;
