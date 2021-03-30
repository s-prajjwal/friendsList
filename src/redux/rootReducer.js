import { ADD_FRIEND, DELETE_FRIEND, mockFriends, SET_SEARCH, TOGGLE_FAV, TOGGLE_MODAL } from "./constants";

const initialState = {
    friends: mockFriends,
    searchFor: "",
    showModal: false,
    modalForId: ""
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FRIEND:
            return { ...state, friends: [...state.friends, action.payload] }
        case TOGGLE_FAV:
            return {
                ...state,
                friends: state.friends.map(friend => friend.id === action.payload.id
                    ? { ...friend, favourite: !friend.favourite }
                    : friend)
            }
        case DELETE_FRIEND:
            return {
                ...state,
                friends: state.friends.filter(friend=> friend.id !== action.payload.id),
                modalForId: ""
            }
        case SET_SEARCH:
            return {
                ...state,
                searchFor: action.payload || ""
            }
        case TOGGLE_MODAL:
            return {
                ...state,
                showModal: !state.showModal,
                modalForId: action.payload.id
            }
        default:
            return state;
    }
}