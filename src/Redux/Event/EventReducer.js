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
        case 'UPDATE_EVENTS':
            const updatedEvents = state.events.map(event => {
                if (event.id == action.payload.id) {
                    return {
                        ...event,
                        ...action.payload.updatedEvent
                    };
                }
                return event;
            });
            return {
                ...state,
                events: updatedEvents
            };
        default:
            return state;
    }
}