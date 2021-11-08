import imagesActionTypes from "./actionTypes";

const initialState = {
    data:{},
    isLoading: false,
    error: ''
}

const {
    FETCH_IMAGES_REQUESTED,
    FETCH_IMAGES_SUCCEEDED,
    FETCH_IMAGES_FAILED,
} = imagesActionTypes

const imagesReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_IMAGES_REQUESTED:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_IMAGES_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
            
        case FETCH_IMAGES_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}

export default imagesReducer;