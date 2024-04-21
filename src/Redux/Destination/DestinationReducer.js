const init = {
    destinations: [],
}

export default function DestinationReducer(state = init, action) {
    switch (action.type) {
        case 'FETCH_DESTINATIONS':
            return { ...state, destinations: action.payload }
        case 'ADD_DESTINATIONS':
            return { ...state, destinations: [...state.destinations,action.payload] }
        case 'DELETE_DESTINATIONS':
            return { ...state, destinations: state.destinations.filter(items => items.id != action.payload) }
        case 'UPDATE_DESTINATIONS':
            return { ...state, users: state.users.filter(items => items.id != action.payload) }
        default:
            return state;
    }
}