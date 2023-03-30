import React from 'react';
import Header from '../components/utils/Header'
import HomeSection from '../components/HomeSection'
import ScrollEmotion from '../components/ScrollEmotion'

function Home(){
  return(
    <div className="Home-wrapper">
      <HomeSection />
      <ScrollEmotion />
    </div>
  )
}

export default Home;