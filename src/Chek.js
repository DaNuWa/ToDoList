import React, { Component } from 'react'


export class Chek extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            ChekArray:this.props.checkstatus,
            c:''
            
        }
    }
    handleChange(e,i) {
        let isChecked = e.target.checked;
        
        this.props.giveParameters(isChecked,i);
      }

    render() {
       
      console.log('check ',this.props.checkstatus)
      console.log('check ',this.state.ChekArray)
        return (
            <div className='RRR'>    {

                 this.state.ChekArray.map((user, i) => {
                return (
            <div className="checkc">
                 <input className='largerCheckbox' key={i}  defaultChecked={this.state.ChekArray[i].status} type="checkbox"  onChange={e => this.handleChange(e,i)} />
                  
            </div>
            );})}</div>
 
        )
    }
}

export default Chek;
