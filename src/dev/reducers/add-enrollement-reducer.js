
import {
    ENROLLEMENT_ADD_NEW_FORM,
    ENROLLEMENT_FORM_ENABLE
} from '../actions/enrollement-action-types';

const initialState = {
    ActivateEnrollmentForm: false
};
export default function addEnrollmentReducer(state = initialState, action) {
    switch (action.type) {
        case ENROLLEMENT_ADD_NEW_FORM:
            return {
                ...state,
                ActivateEnrollmentForm: false
                //   fetchEnrollmentReducer.items:[...state.fetchEnrollmentReducer.items, action.payload]
            }
        case ENROLLEMENT_FORM_ENABLE:
            return {
                ...state,
                ActivateEnrollmentForm: true
            };
        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}