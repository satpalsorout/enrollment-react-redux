import {
  SELECT_ENROLLEMENT,ENROLLEMENT_UPDATE,ENROLLEMENT_SELECTED_REMOVED
} from '../actions/enrollement-action-types';
export default function selectedEnrollmentReducer(state = null, action) {
  switch (action.type) {
    case SELECT_ENROLLEMENT:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        selectedEnrollment: action.payload
      };
      case ENROLLEMENT_UPDATE:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        selectedEnrollment: null
      };
      case ENROLLEMENT_SELECTED_REMOVED:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        selectedEnrollment: null
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}