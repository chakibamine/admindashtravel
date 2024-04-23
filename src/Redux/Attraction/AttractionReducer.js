const init = {
    attractions: [],
}

export default function AttractionReducer(state = init, action) {
    switch (action.type) {
        case 'FETCH_TRANSPOPRT':
            return {...state,transports: action.payload,};
        case 'ADD_TRANSPOPRT':
            return { ...state, transports: [...state.transports,action.payload] };
        case 'DELETE_TRANSPOPRT':
            return { ...state, transports: state.transports.filter(items => items.id != action.payload) }
        // case 'UPDATE_TRANSPOPRT':
        //     
        default:
            return state;
    }
}