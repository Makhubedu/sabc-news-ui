import React from 'react'
import Speech from 'react-speech'

React.render(
    <Speech
  stop={true} 
  pause={true} 
  resume={true} 
  text="I am displaying all buttons" />, document.getElementById('node')
)