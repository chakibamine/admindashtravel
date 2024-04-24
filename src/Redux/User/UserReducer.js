
const init = {
    users: [],
}

export default function UserReducer(state = init, action) {
    switch (action.type) {
        case 'FETCH_USERS':
            return { ...state, users: action.payload }
        case 'ADD_USER':
            return { ...state, users: [...state.users, action.payload] }
        case 'DELETE_USER':
            return { ...state, users: state.users.filter(items => items.id !== action.payload) }
        case 'UPDATE_USER':
            const updatedUsers = state.users.map(user => {
                if (user.id == action.payload.id) {
                    return {
                        ...user,
                        ...action.payload.updatedUser
                    };
                }
                return user;
            });
            return {
                ...state,
                users: updatedUsers
            };
        default:
            return state;
    }
}