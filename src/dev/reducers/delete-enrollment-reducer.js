import {
    ENROLLEMENT_DELTE
} from '../actions/enrollement-action-types';

const initialState = {
    deleteEnrollment: false
};
export default function deleteEnrollmentReducer(state = initialState, action) {
    switch (action.type) {
        case ENROLLEMENT_DELTE:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                deleteEnrollment: true
            };
        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}