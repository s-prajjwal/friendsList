import { ADD_FRIEND, DELETE_FRIEND, TOGGLE_FAV, SET_SEARCH, TOGGLE_MODAL } from "./constants";

export function addFriend(name) {
    return {
        type: ADD_FRIEND,
        payload: {id: Date.now(), name, favourite: false}
    }
}

export function deleteFriend(id) {
    return {
        type: DELETE_FRIEND,
        payload: {id}
    }
}

export function toggleFavourite(id) {
    return {
        type: TOGGLE_FAV,
        payload: {id}
    }
}

export function setSearchFor(val="") {
    return {
        type: SET_SEARCH,
        payload: val
    }
}

export function toggleModal(id="") {
    return {
        type: TOGGLE_MODAL,
        payload: {id}
    }
}