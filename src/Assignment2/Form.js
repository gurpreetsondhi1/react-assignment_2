import React,{Component} from 'react'
import Employee from './Employee';
import './index.css';

class Form extends Component {
  state={
      name:"",
      dept:"",
      rating:"",
      user:[],
      val:true
  }
  handleChange=(event) =>{
      this.setState({
          [event.target.name]:event.target.value
      })
  }
  handleSubmit=(event)=>{
       
      event.preventDefault()

      this.setState({
            val:!this.state.val
        })

      const tempObj={
          name:this.state.name,
          rating:this.state.rating,
          dept:this.state.dept      
        }
        const tempArr=this.state.user;
        tempArr.push(tempObj)
        this.setState({user:tempArr});
        // function showstatus(){
        //     return (!this.state.val)
        // }
        // showstatus();
  }
  back=()=>{
      this.setState({
        val:!this.state.val
      })
  }
  
  render(){
    
    return (
    <div>
        {this.state.val && ( <>
        <h1 style={{color: "Yellow ", textAlign:"center", fontSize:'50px'}}>Employee Feedback Form : </h1>
        <form>
            <center>
            <label className="label" for="name">Name : </label>
            <input type="text" id="name" className='inp' style={{marginLeft:"58px"}} name="name" placeholder='Enter your name' onChange={this.handleChange} value={this.state.name} />
            <br></br><br></br>
            <label  className="label" for="dept">Department : </label>
            <input type="text" id="dept" className='inp'  name="dept" placeholder='Department name' onChange={this.handleChange} value={this.state.dept} />
            <br></br><br></br>
            <label className="label" for="rating">Rating : </label>
            <input type="rating" id="rating" className='inp' style={{marginLeft:"58px"}} name="rating" placeholder='Rating' onChange={this.handleChange} value={this.state.rating} />
            <br></br><br></br>
            <button className='submit' onClick={this.handleSubmit}>Submit</button>
            </center>

        </form>
        <br></br>
        </>)}
        
        {/* <div className='outDiv'>
        {this.state.user.map((value,index)=>
        {return(
            <div className='div'>
                Rating : { value.name} | Department : {value.dept} | Rating :  {value.rating}
            </div>
        )}
        )}
        </div> */}


       { !this.state.val && 
            <Employee data={
            this.state.user} 
            backf={this.back}

            />}
        
    </div>
  );
}
}
export default Form