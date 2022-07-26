import './App.css'
import React from 'react'
import Card from '../../common/CDS/components/card/Card'

function App () {
  return (
    <div className='app' id='popup-app'>
      pop-up

      <div className='cards'>
        <Card
          title='Title'
          importance='severe'
          notification='Notification text.'
        >
          Body text.
        </Card>

        <hr />
        <Card
          title='Title \n2 Lines'
        >
          Body text.
          Lorem ipsum dolor sit amet, consectetur adispicing.
        </Card>

        <hr />
        <Card
          title='Missing Annual Diabetes Tests'
        >
          Body text.
          Lorem ipsum dolor sit amet, consectetur adispicing.
        </Card>
      </div>
    </div>
  )
} export default App
