import * as actions from '../../store/actions'
let initialState = {
    count : 0
}
let countReducer = (state=initialState,action)=>{
    if(action.type == actions.INCREMENT){
        return {
            ...state,
            count : state.count+1,
            
        }
    }
    if(action.type==actions.DECREMENT){
        return {
            ...state,
            count : state.count-1,
           
        }
    }
    
    if(action.type==actions.ADDNUMBER){
        return {
        ...state,
        count : state.count +5
        }
    }
    if(action.type==actions.SUBTRACTNUMBER){
        return {
        ...state,
        count : state.count -5
        }
    }
return state;
}
export default countReducer;