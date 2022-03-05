import {
    LOAD_TEACHERS_DATA,
    SET_TEACHERS_DATA,
    TEACHERS_SPINNER_ACTIVATE,
    TEACHERS_SPINNER_DEACTIVATE
} from "../types/teachersPageTypes";


export const loadTeachersData = ()=>{
    return{
        type: LOAD_TEACHERS_DATA
    }
}

export const setTeachersData = (payload)=>{
    return{
        type: SET_TEACHERS_DATA,
        payload: payload
    }
}

export const teachersSpinnerActivate = ()=>{
    return{
        type: TEACHERS_SPINNER_ACTIVATE
    }
}

export const teachersSpinnerDeactivate = ()=>{
    return{
        type: TEACHERS_SPINNER_DEACTIVATE
    }
}