import React, { Component } from 'react'
import './index.css';
export class Additem extends Component
 {
     constructor()
     {
         super();
         this.state={
             inputs:''
         }

     }
     onChange=(e)=>
     {
         console.log(e.target.value);
        this.setState({inputs:e.target.value});
     }
     clicks=()=>
    {
        this.setState({inputs:''});
        this.props.add(this.state.inputs);
        console.log(this.state.inputs)
        
    }
    render() {
        return (
       
        <div className='con'>
            <div className='g'>
    <input  value={this.state.inputs} placeholder='enter' onChange={this.onChange} className="form-control w-50 ooo " type="text" aria-describedby="name-desc"></input>
    </div>
    <div className='g'>
  <button className="btn btn-primary " onClick={this.clicks}>Add to List</button>
  </div>
    </div>

        );    

        }
}

export default Additem;