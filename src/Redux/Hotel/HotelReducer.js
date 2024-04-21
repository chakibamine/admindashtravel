const init = {
    hotels: [],
}

export default function HotelReducer(state = init, action) {
    switch (action.type) {
        case 'FETCH_HOTELS':
            return {...state,hotels: action.payload,};
        case 'ADD_HOTELS':
            return { ...state, hotels: [...state.hotels,action.payload] };
        case 'DELETE_HOTELS':
            return { ...state, hotels: state.hotels.filter(items => items.id != action.payload) }
        // case 'UPDATE_HOTELS':
        //     return { ...state, users: state.users.filter(items => items.id != action.payload) }
        default:
            return state;
    }
}