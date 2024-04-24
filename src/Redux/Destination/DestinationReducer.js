const init = {
    destinations: [],
}

export default function DestinationReducer(state = init, action) {
    switch (action.type) {
        case 'FETCH_DESTINATIONS':
            return { ...state, destinations: action.payload }
        case 'ADD_DESTINATIONS':
            return { ...state, destinations: [...state.destinations, action.payload] }
        case 'DELETE_DESTINATIONS':
            return { ...state, destinations: state.destinations.filter(destination => destination.id !== action.payload) }
        case 'UPDATE_DESTINATIONS':
            const updatedDestinations = state.destinations.map(destination => {
                if (destination.id == action.payload.id) {
                    return {
                        ...destination,
                        ...action.payload.updatedDestination
                    };
                }
                return destination;
            });
            return {
                ...state,
                destinations: updatedDestinations
            };
        default:
            return state;
    }
}
