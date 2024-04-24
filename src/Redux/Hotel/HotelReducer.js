const init = {
    hotels: [],
}

export default function HotelReducer(state = init, action) {
    switch (action.type) {
        case 'FETCH_HOTELS':
            return { ...state, hotels: action.payload };
        case 'ADD_HOTEL':
            return { ...state, hotels: [...state.hotels, action.payload] };
        case 'DELETE_HOTEL':
            return { ...state, hotels: state.hotels.filter(item => item.id !== action.payload) };
        case 'UPDATE_HOTEL':
            const updatedHotels = state.hotels.map(hotel => {
                if (hotel.id === action.payload.id) {
                    return {
                        ...hotel,
                        ...action.payload.updatedHotel
                    };
                }
                return hotel;
            });
            return {
                ...state,
                hotels: updatedHotels
            };
        default:
            return state;
    }
}
