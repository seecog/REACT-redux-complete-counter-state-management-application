import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions'
class Counter extends Component{

constructor(){
    super();
}   
render(){
    return (
        <div>
The count is {this.props.icount}
<hr/>
<button onClick={this.props.onIncrement}>Increment</button> | 
<button onClick={this.props.onDecrement}>Decrement</button> | 
<button onClick={this.props.addNumber}>Add 5</button> | 
<button onClick={this.props.subtractNumber}>Subtract 5</button> | 
<button onClick={()=>this.props.addResult(this.props.icount)}>Result</button> 
<hr/>
<table>
    <tr>
    <th>Time</th><th>Count</th>
    </tr>
{
    this.props.ieffects.map((effect,i)=>{
return (
    <tr key={i}>
<td>{effect.time}</td>
<td>{effect.count}</td>
        </tr>
)
    })
}
</table>
            </div>
    )
}
}

let mapStateToProps = (state)=>{
    return {
icount : state.countX.count,
ieffects : state.effectsX.effects
    }
}

let mapDispatchToProps =(dispatch)=>{
return {
    onIncrement : ()=>dispatch({type : actions.INCREMENT}),
    onDecrement : ()=>dispatch({type : actions.DECREMENT}),
    addResult : (event)=>{
        console.log('The event is ',event)
        dispatch({type : actions.ADDRESULT,val : event})
    },
    addNumber : ()=>dispatch({type : actions.ADDNUMBER,val : 5}),
    subtractNumber : ()=>dispatch({type : actions.SUBTRACTNUMBER,val : 5}),
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);