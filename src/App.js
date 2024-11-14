import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Programs from './Components/programs/programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/Video-player/VideoPlayer'



const App = () => {

  const [playState, setPlayState] = useState(false);



  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student says'/>
        <Testimonials/>
        <Title subTitle='Contact us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
