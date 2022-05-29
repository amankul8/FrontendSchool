import {
    AKKREDITATSIYA_ACTIVATE_SPINNER, AKKREDITATSIYA_DEACTIVATE_SPINNER,
    AKKREDITATSIYA_LOAD_DATA,
    AKKREDITATSIYA_SET_DATA
} from "../types/akkreditatsiyaTypes";

export function akkrLoadData(){
    return{
        type: AKKREDITATSIYA_LOAD_DATA
    }
}
export function akkrSetData(payload){
    return{
        type: AKKREDITATSIYA_SET_DATA,
        payload: payload
    }
}

export function akkrActivateSpinner(){
    return{
        type: AKKREDITATSIYA_ACTIVATE_SPINNER
    }
}
export function akkrDeactivateSpinner(){
    return{
        type: AKKREDITATSIYA_DEACTIVATE_SPINNER
    }
}