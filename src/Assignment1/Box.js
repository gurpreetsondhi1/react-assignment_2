import React from 'react' 

const Box = ({data}) => {
   console.log(data);
  return (
    <div className='bigbox'>
        <h1 className='text'>{data}</h1>
        <p>This is done using external css</p>
    </div>
  )
}

export default Box