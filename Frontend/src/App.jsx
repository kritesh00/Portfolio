import Welcome from './Components/Welcome'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Snowfall from 'react-snowfall'
import './App.css'


function App() {
  return (
    <>
      <Snowfall
  style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
  }}
  snowflakeCount={100}
/>
      <Nav/>
      <Welcome/>
     
      <Hero/>
      <Education/>
     <Contact/>
      <Footer/>
      
    </>
  )
}

export default App
