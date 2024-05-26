
import { useReducer } from "react";

export const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.FAV_PHOTO_ADDED:
            return {
                ...state,
                favPhoto: state.favPhoto.includes(action.payload.id)
                    ? state.favPhoto
                    : [...state.favPhoto, action.payload.id]
            };
        case ACTIONS.FAV_PHOTO_REMOVED:
            return {
                ...state,
                favPhoto: state.favPhoto.filter(id => id !== action.payload.id)
            };
        case ACTIONS.SELECT_PHOTO:
            return {
                ...state,
                displayModal: action.payload.photo
            };
        case ACTIONS.DISPLAY_PHOTO_DETAILS:
            return {
                ...state,
                displayModal: action.payload.photoDetails,
            };
        default:
            throw new Error(
                `Tried to reduce with unsupported action type: ${action.type}`
            );
    }
}

const useApplicationData = () => {
    const initialState = {
        favPhoto: [],
        displayModal: null
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateToFavPhotoIds = (id) => {
        state.favPhoto.includes(id)
            ? dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } })
            : dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
    };

    const onPhotoSelect = (photo) => {
        dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
    };

    const onClosePhotoDetailsModal = () => {
        dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { photoDetails: null } });
    };
    
    return { state, updateToFavPhotoIds, onPhotoSelect, onClosePhotoDetailsModal };
}

export default useApplicationData;
