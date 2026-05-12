import { useState } from 'react'
import AnnouncementBar from "./compo/AnnouncementBar";
import Header from "./compo/Header";
import Hero from './compo/Hero';
import ClientLogos from './compo/ClientLogos';
import DrivingDemand from './compo/DrivingDemand';
import FeaturedWork from './compo/FeaturedWork';
import Services from './compo/Service';
import Marquee from './compo/Marquee';
import Legacy from './compo/Legacy';
import BlogSection from './compo/BlogSectioin';
import ReadyToRise from './compo/ReadyToRise';
import Footer from './compo/Footer';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  return (
    <>
    
    <AnnouncementBar ></AnnouncementBar>
    <Header></Header>
    <Hero> </Hero>
    
    <ClientLogos></ClientLogos>
    <DrivingDemand></DrivingDemand>
    <FeaturedWork></FeaturedWork>
    <Services></Services>
    <Marquee></Marquee>
    <Legacy></Legacy>
    <BlogSection></BlogSection>
    <ReadyToRise></ReadyToRise>
    <Footer></Footer>
    </>
  )
}

export default App
