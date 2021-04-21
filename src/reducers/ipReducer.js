const ipReducer = (state={}, action) => {
    switch(action.type) {
        case 'SET_IP':
            return {
                ...state,
                ...action.payload
            }
        case 'FETCHING_IP': 
            return {
                ...state,
                loading: true
            }
        case 'FETCHED_IP':
            return {
                ...state,
                loading: false
            }
        default: 
        return state
    }
}

export default ipReducer