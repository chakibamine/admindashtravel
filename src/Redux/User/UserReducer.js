
const init = {
    users: [],
}

export default function UserReducer(state = init, action) {
    switch (action.type) {
        case 'FETCH_USERS':
            return { ...state, users: action.payload }
        case 'ADD_USER':
            return { ...state, users: [...state.users,action.payload] }
        case 'DELETE_USER':
            return { ...state, users: state.users.filter(items => items.id != action.payload) }
        case 'UPDATE_USER':
            return { ...state, users: state.users.filter(items => items.id != action.payload) }
        default:
            return state;
    }
}