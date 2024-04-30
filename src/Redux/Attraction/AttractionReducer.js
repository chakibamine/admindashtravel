const init = {
    attractions: [],
}

export default function AttractionReducer(state = init, action) {
    switch (action.type) {
        case 'FETCH_ATTRACTIONS':
            return {...state,attractions: action.payload};
        case 'ADD_ATTRACTION':
            return { ...state, attractions: [...state.attractions,action.payload] };
        case 'DELETE_ATTRACTION':
            return { ...state, attractions: state.attractions.filter(items => items.id != action.payload) }
        case 'UPDATE_ATTRACTION':
        const updatedAttractions = state.attractions.map(attraction => {
            if (attraction.id == action.payload.id) {
                return {
                    ...attraction,
                    ...action.payload.updatedAttraction
                };
            }
            return attraction;
        });
        return {
            ...state,
            attractions: updatedAttractions
        };     
        default:
            return state;
    }
}