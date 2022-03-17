import {
    SCHOOL_DOCS_ACTIVATE_SPINNER,
    SCHOOL_DOCS_DEACTIVATE_SPINNER,
    SCHOOL_DOCS_LOAD_DATA,
    SCHOOL_DOCS_SET_DATA
} from "../types/schoolDocsTypes";

export function schoolDocsLoadData(){
    return{
        type: SCHOOL_DOCS_LOAD_DATA
    }
}

export function schoolDocsSetData(payload){
    return{
        type: SCHOOL_DOCS_SET_DATA,
        payload: payload
    }
}

export function schoolDocsActSpinner(){
    return{
        type: SCHOOL_DOCS_ACTIVATE_SPINNER
    }
}

export function schoolDocsDeActSpinner(){
    return{
        type: SCHOOL_DOCS_DEACTIVATE_SPINNER
    }
}