const init = {
    restaurants: [],
}

export default function RestaurantReducer(state = init, action) {
    switch (action.type) {
        case 'FETCH_RESTAURANT':
            return { ...state, restaurants: action.payload, };
        case 'ADD_RESTAURANT':
            return { ...state, restaurants: [...state.restaurants, action.payload] };
        case 'DELETE_RESTAURANT':
            return { ...state, restaurants: state.restaurants.filter(items => items.id != action.payload) }
        case 'UPDATE_RESTAURANT':
            const updatedRestaurants = state.restaurants.map(restaurant => {
                if (restaurant.id === action.payload.id) {
                    return {
                        ...restaurant,
                        ...action.payload.updatedRestaurant
                    };
                }
                return restaurant;
            });
            return {
                ...state,
                restaurants: updatedRestaurants
            };
        default:
            return state;
    }
}