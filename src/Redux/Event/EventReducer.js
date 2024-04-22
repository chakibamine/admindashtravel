const init = {
    events: [],
}

export default function EventReducer(state = init, action) {
    switch (action.type) {
        case 'FETCH_EVENTS':
            return {...state,events: action.payload,};
        case 'ADD_EVENTS':
            return { ...state, events: [...state.events,action.payload] };
        case 'DELETE_EVENTS':
            return { ...state, events: state.events.filter(items => items.id != action.payload) }
        // case 'UPDATE_HOTELS':
        //     
        default:
            return state;
    }
}