export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

//Add feature action here! ---------------------------------------
export const addFeature = feature => {
    return({
        type: ADD_FEATURE,
        payload: feature
    })
}

//Remove Feature action here! ------------------------------------
export const removeFeature = feature => {
    return ({
        type: REMOVE_FEATURE,
        payload: feature
    })
}