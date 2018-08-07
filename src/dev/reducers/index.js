import fetchEnrollmentReducer from './get-enollement-reducer'
import selectedEnrollmentReducer from './select-enrollement-reducer'
import addEnrollmentReducer from './add-enrollement-reducer';
import deleteEnrollmentReducer from './delete-enrollment-reducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    fetchEnrollmentReducer: fetchEnrollmentReducer,
    selectedEnrollmentReducer: selectedEnrollmentReducer,
    ActivateEnrollmentForm: addEnrollmentReducer,
    deleteEnrollmentReducer: deleteEnrollmentReducer
})
export default allReducers;