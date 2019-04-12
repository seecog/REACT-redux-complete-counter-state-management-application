import * as actions from '../../store/actions'
let initialState = {
    
    effects : []
}
let effectsReducer = (state=initialState,action)=>{
    
    if(action.type==actions.ADDRESULT){
        return {
        ...state,
        effects : state.effects.concat({time : `${new Date()}`,count : action.val})
   
    }}
    
return state;
}

export default effectsReducer;