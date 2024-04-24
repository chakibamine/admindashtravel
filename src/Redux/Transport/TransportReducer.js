const init = {
    transports: [],
}

export default function TransportReducer(state = init, action) {
    switch (action.type) {
        case 'FETCH_TRANSPOPRT':
            return { ...state, transports: action.payload, };
        case 'ADD_TRANSPOPRT':
            return { ...state, transports: [...state.transports, action.payload] };
        case 'DELETE_TRANSPOPRT':
            return { ...state, transports: state.transports.filter(items => items.id != action.payload) }
        case 'UPDATE_TRANSPOPRT':
            const updatedTransports = state.transports.map(transport => {
                if (transport.id == action.payload.id) {
                    return {
                        ...transport,
                        ...action.payload.updatedTransport
                    };
                }
                return transport;
            });
            return {
                ...state,
                transports: updatedTransports
            };
        default:
            return state;
    }
}