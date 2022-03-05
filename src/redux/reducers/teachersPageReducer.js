import {
    SET_TEACHERS_DATA,
    TEACHERS_SPINNER_ACTIVATE,
    TEACHERS_SPINNER_DEACTIVATE
} from "../types/teachersPageTypes";

const initial_state = {
    teachers: [],
    teachers_spinner: false
}

function teachersPageReducer(state=initial_state, action){

    switch (action.type){
        case SET_TEACHERS_DATA:
            return {...state, teachers: action.payload};
        case TEACHERS_SPINNER_ACTIVATE:
            return {...state, teachers_spinner: true};
        case TEACHERS_SPINNER_DEACTIVATE:
            return {...state, teachers_spinner: false};
        default:
            return state;
    }
}

export default teachersPageReducer;