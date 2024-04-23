const init = {
    offres: [],
}

export default function OffreReducer(state = init, action) {
    switch (action.type) {
        case 'FETCH_OFFRES':
            return {...state,offres: action.payload,};
        case 'ADD__OFFRES':
            return { ...state, offres: [...state.offres,action.payload] };
        case 'DELETE_OFFRES':
            return { ...state, offres: state.offres.filter(items => items.id != action.payload) }
        // case 'UPDATE_OFFERS':
        default:
            return state;
    }
}