import React from 'react';
import Header from '../components/Header'
import HomeSection from '../components/HomeSection'
import ScrollEmotion from '../components/ScrollEmotion'
// import '../App.css';

function Home(){
  return(
    <React.Fragment>
      <Header />
      <HomeSection />
      <ScrollEmotion />
    </React.Fragment>
  )
}

export default Home;