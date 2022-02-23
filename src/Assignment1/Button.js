import React from 'react'
import Box from './Box.js'

const testData = {
  name: "This is created using Class component"
}
function Button() {
  const [status,setStatus]=React.useState(true)
  return(
    <>
    <button className='button' onClick={()=>setStatus(!status)}>To see styling in class component</button>
    
    {
      status?<Box data={testData.name}/>:null
    }
    
    </>
  )
  
}

export default Button