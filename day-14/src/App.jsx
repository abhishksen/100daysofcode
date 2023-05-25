import React from 'react'
import './App.css'
import Card from './components/Card'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Data from './data'
const App = () => {
  const data = Data
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="home-card-container">
        {
          data.map((item) =>
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.coverImg}
              rating={item.stats.rating}
              stars={item.stats.reviewCount}
              loc={item.location}
              openSpots={item.openSpots}
            />)
        }
      </div>
    </>
  )
}

export default App
