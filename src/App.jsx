import React from 'react'
import MaskWords from './Animations/MaskWords'
import HeartBeat from './Animations/heartBeat'
import Sphere from './Animations/Sphere'
import Cube from './Animations/Cube'
import Buttons from './Animations/Buttons'
import GridTemplates from './Animations/GridTemplates'
import New from './Animations/New'
import Whiteboard from './Animations/WhiteBoard'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Animations/Navbar'
const App = () => {

  
  return (
    <>
    
      <Router>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Cube/>}   />
          <Route path='/heartBeat' element={<HeartBeat/>}   />
          
          <Route path='/sphere' element={<Sphere/>}   />
          <Route path='/buttons' element={<Buttons/>}   />
        </Routes>
      </Router>
      
      {/* <MaskWords/> */}
      {/* <GridTemplates/> */}
      {/* <New/> */}
      {/* <Whiteboard/> */}
    </>
  )
}

export default App
