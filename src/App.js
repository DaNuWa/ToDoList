import React, { Component } from 'react'
import {Datas} from './Datas'
import Display from './Display'
import Additem from './Additem'
import Chek from './Chek'
import nextId from "react-id-generator";
import _ from 'lodash';
export class App extends Component {
  htmlId = nextId();
  constructor()
  {
  super()
      this.state={
        details:Datas,
        textDecoration:'line-through',
      }
  }
  changestatus=(params,index)=>
  {
    const newIds = this.state.details.slice() //copy the array
    newIds[index].status = params //execute the manipulations
    this.setState({details: newIds}) //set the new state
 }
  add=(todoitem)=>
  {
    const newlist={
      "id":50,
      work:todoitem,
      status:false
    }
    this.setState({details:[...this.state.details,newlist]});
  
  }
  render() {
    console.log('new ',this.state.details,'id =',_.uniqueId('contact_'))
    return (
      <div key={_.uniqueId('contact_')} className='RRRR'>
        <Additem add={this.add}/>
        <Display  Datas={this.state.details} status={this.state.textDecoration}/>
        <Chek  key={_.uniqueId('contact_')} checkstatus={this.state.details} giveParameters={this.changestatus}/>
        </div>
    )
  }
}

export default App;
