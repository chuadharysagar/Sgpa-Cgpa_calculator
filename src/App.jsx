import React from 'react'
import Container from './components/Container'
import DisplaySubjects from './components/DisplaySubjects'
import Heading from './components/Heading'

const App = () => {
   return <div className="app-container">
      <Heading/>
      <Container />
      <DisplaySubjects />
   </div>


}

export default App
