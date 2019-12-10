import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App(){
  /*const date = new Date(2019, 6, 31, 1)
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30,
     }
  
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
    //styles.backgroundColor = "#000"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#2E0927"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }*/
  return(
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App;
