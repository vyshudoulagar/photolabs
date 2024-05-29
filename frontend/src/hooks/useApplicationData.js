
import { useReducer, useEffect } from "react";

export const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
    SET_TOPIC_ID: 'SET_TOPIC_ID',
    GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.FAV_PHOTO_ADDED:
            return {
                ...state,
                favPhoto: [...state.favPhoto, action.payload.id]
            };
        case ACTIONS.FAV_PHOTO_REMOVED:
            return {
                ...state,
                favPhoto: state.favPhoto.filter(id => id !== action.payload.id)
            };
        case ACTIONS.SET_PHOTO_DATA:
            return {
                ...state,
                photoData: action.payload.data,
            };
        case ACTIONS.SET_TOPIC_DATA:
            return {
                ...state,
                topicData: action.payload.data,
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
        case ACTIONS.GET_PHOTOS_BY_TOPICS:
            return {
                ...state,
                photoData: action.payload.data,
            };
        case ACTIONS.SET_TOPIC_ID:
            return {
                ...state,
                topicId: action.payload.id
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
        displayModal: null,
        photoData: [],
        topicData: [],
        topicId: null
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        fetch(`/api/photos`)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { data } })
            })
            .catch(err => console.log('Error: ', err));

        fetch(`/api/topics`)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { data } })
            })
            .catch(err => console.log('Error: ', err));

    }, []);

    useEffect(() => {
        const fetchPhotosByTopic = (id) => {
            fetch(`/api/topics/photos/${id}`)
                .then(res => res.json())
                .then(data => {
                    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: { data } })
                })
                .catch(err => console.log('Error: ', err));
        };

        state.topicId && fetchPhotosByTopic(state.topicId);
    }, [state.topicId]);

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

    const onLoadTopic = (id) => {
        dispatch({ type: ACTIONS.SET_TOPIC_ID, payload: { id } });
    };

    const reLoad = () => {
        window.location.reload();
    };

    return { state, updateToFavPhotoIds, onPhotoSelect, onClosePhotoDetailsModal, onLoadTopic, reLoad };
}

export default useApplicationData;
