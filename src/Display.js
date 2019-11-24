import React, { Component } from 'react'
import _ from 'lodash';


export class Display extends Component {
  constructor(props)
  {
    super(props)
  
      this.state={
        status:true,
        value:[],
        newarr:this.props.Datas
      };
    
  }
  
  onChange(e, i){
    let value = this.state.value.slice();
    value[i] = e.target.checked;
    this.setState({value})
 }
     
 unCheck(i){
    let value = this.state.value.slice();
    value[i] = !value[i];
    this.setState({value})
    }
 s=(i)=>
 {
  for( let j=i;j<=i;j++)
  {
    
      if(this.props.Datas[i].status===true)
      {
        const m='line-through';
        console.log(m);
        return m; 
      

      }
      else
      {
        const m='none';
        return m;
      }
  }
 
 }
    render() {
      console.log('meka thama ',this.state.newarr)
        return (
            <div className="RRR">
                {
              this.props.Datas.map((user, i) => {
                return (
                  <div className='t' 
                  key={i}> <h1 style={{textDecoration:this.s(i)}}>{_.concat(i+1, ' ', this.props.Datas[i].work)} </h1>
                      </div>
                
                );
              })
            }
              </div>
         );
    }
}

export default Display;
