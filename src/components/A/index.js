import React,{Component} from 'react'
import {connect} from 'react-redux'
import './index.less'

 class A extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
  
    render(){
        
        return(
            <div>AAAAAAAAAAAAAAA<br/>
                num ---->{this.props.num}  <br/>
                <button onClick={this.props.add}>add</button>
                <button onClick={this.props.del}>del</button>
            </div>
        )
    }    
}

let mapStateToProps= (state)=>{
    return{
        num: state.num
    }
}

let mapDispatchToProps = (dispatch)=>{
  return{
      add: ()=>{
          
         dispatch({type: 'ADD'})
      },
      del:()=>{
          dispatch({type: 'DEL'})
      }
  }
};



export default A = connect(mapStateToProps,mapDispatchToProps)(A)