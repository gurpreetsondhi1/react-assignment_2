import React from 'react'

function Employee (props)  {
  return (
    <>
        <h1 style={{color: "Yellow ", textAlign:"center", fontSize:'50px'}}>Employee Feedback Data : </h1>
        {console.log(props.data)}

     <div className='outDiv'>
        {props.data.map((value,index)=>
        {return(
            <div className='div'>
            Name : { value.name} | Department : {value.dept} | Rating :  {value.rating}
            </div>
        )}
        )}

        <center>
        <button onClick={props.backf} className="submit"> Go Back</button></center>
        </div> 
      
    </>
  )
}

export default Employee