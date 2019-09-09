let reducer = (state={num:1}, action) =>{
    switch (action.type) {
        case "ADD":

           return { num: state.num+1}
    
        case "DEL":

           return { num: state.num-1}
    
        default:
            return state
    }
}


export default reducer