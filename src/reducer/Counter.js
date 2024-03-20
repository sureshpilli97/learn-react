const values = {
    fibo:1,
    pre:0,
    temp:0
}

const Counter = (state=values,action) =>{
    if(action.type === 'NEXT'){
        return {
            ...state,
            temp: state.fibo,
            fibo: (state.pre+state.fibo),
            pre : state.pre+1
        }
    }
    console.log(action)
    return {
        ...state,
        temp: state.fibo,
        fibo: (state.fibo-state.pre),
        pre : state.pre-1
    }
}

export default Counter;