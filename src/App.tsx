import React from 'react'
import Dropdown from "./dropdown"
import Ball from './assets/ball.png'
import Gamepad from './assets/gamepad.png'
import Education from './assets/education.png'
import Art from './assets/art.png'
import Health from './assets/health.png'

function App() {
  const items=[{
    label: 'Education',
    value: 'education',
    icon: Education
  },
{
    label: 'Art',
    value: 'art',
    icon: Art
  },
{
    label: 'Sport',
    value: 'sport',
    icon: Ball
  },
{
    label: 'Games',
    value: 'games',
    icon: Gamepad
  }
,
{
    label: 'Health',
    value: 'Health',
    icon: Health
  }]
  const onChangeDropdown=slectedValues=>{
console.log('slectedValues##', slectedValues)
  }
  return (
    <div style={{margin: 0,maxWidth:500,marginLeft:200,marginTop:200}}>
    <Dropdown items={items} onChange={onChangeDropdown} 
   
    defaultValue={[{
    label: 'Games',
    value: 'games',
  }
,
{
    label: 'Health',
    value: 'Health',
  }]
}
/></div>
  );
}

export default App;
