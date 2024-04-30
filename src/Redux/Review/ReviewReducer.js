const init = {
    reviews: [],
}

export default function ReviewReducer(state = init, action) {
    switch (action.type) {
        case 'FETCH_REVIEWS':
            return {...state,reviews: action.payload};
        case 'DELETE_REVIEWS':
            return { ...state, reviews: state.reviews.filter(review => review.id !== action.payload) }   
        default:
            return state;
    }
}