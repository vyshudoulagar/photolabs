import { useState } from "react";

const useApplicationData = () => {
    const [state, setState] = useState({
        favPhoto: [],
        displayModal: null
    });

    const updateToFavPhotoIds = (id) => {
        setState(prevState => ({
            ...prevState,
            favPhoto: prevState.favPhoto.includes(id)
                ? prevState.favPhoto.filter(photoId => photoId !== id)
                : [...prevState.favPhoto, id]
        }));
    };

    const onPhotoSelect = (photo) => {
        setState((prevState) => ({
            ...prevState,
            displayModal: photo
        }));
    };

    const onClosePhotoDetailsModal = () => {
        setState((prevState) => ({
            ...prevState,
            displayModal: null
        }));

    };
    return {state, updateToFavPhotoIds, onPhotoSelect, onClosePhotoDetailsModal};
}

export default useApplicationData;
