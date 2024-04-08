import React from 'react'

export default function HelpQuestion(props) {
  return (
    <>
    <div style={{padding:'10px'}}> 
    <props.icon/>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    </div>
    
    
    
    </>
  )
}
