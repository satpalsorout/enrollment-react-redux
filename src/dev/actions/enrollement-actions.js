import {
  FETCH_ENROLLEMENTS_BEGIN,
  FETCH_ENROLLEMENTS_SUCCESS,
  FETCH_ENROLLEMENTS_FAILURE,
  SELECT_ENROLLEMENT,
  ENROLLEMENT_FORM_ENABLE,
  ENROLLEMENT_ADD_NEW_FORM,
  ENROLLEMENT_DELTE,
  ENROLLEMENT_UPDATE,
  ENROLLEMENT_SELECTED_REMOVED
} from './enrollement-action-types';
import EnrollementService from '../services/enrollment-service'

const enrollementService = new EnrollementService();

export function fetchEnrollments() {
  return dispatch => {
    dispatch(fetchEnrollmentsBegin());
    return enrollementService.GetAllEnrollement().then(handleErrors)
      .then(res => res)
      .then(json => {
        dispatch(fetchEnrollmentsSuccess(json));

      })
      .catch(error => dispatch(fetchEnrollmentsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (response.statusText !== "OK") {
    throw Error(response.statusText);
  }
  return response.data;
}

export const fetchEnrollmentsBegin = () => ({
  type: FETCH_ENROLLEMENTS_BEGIN
});

export function fetchEnrollmentsSuccess(enrollments) {
  return {
    type: FETCH_ENROLLEMENTS_SUCCESS,
    payload: { enrollments }
  }
}

export const fetchEnrollmentsFailure = error => ({
  type: FETCH_ENROLLEMENTS_FAILURE,
  payload: { error }
});

export const selectedEnrollement = (enrollement) => {
  return {
    type: SELECT_ENROLLEMENT,
    payload: enrollement
  }
};
export const deletedEnrollmentSucess = () => {
  return {
    type: ENROLLEMENT_DELTE,
    payload: ''
  }
}

export const deleteEnrollement = (enrollement) => {
  return dispatch => {
    return enrollementService.DeleteEnrollement(enrollement.id).then(handleErrors)
      .then(res => res)
      .then(json => {
        dispatch(fetchEnrollments(json));
        dispatch(deletedEnrollmentSucess);
      })
  };
};
export const updatedEnrollementSuccess=()=>
{
  return {
    type: ENROLLEMENT_UPDATE,
    payload: ''
  }
}
export const removedSelectedEnrollment=()=>
{
  return {
    type: ENROLLEMENT_SELECTED_REMOVED,
    payload: ''
  }
}
export const updateEnrollement = (enrollement) => {
  return dispatch => {
    dispatch(updatedEnrollementSuccess);
    return enrollementService.UpdateEnrollement(enrollement.id, enrollement).then(handleErrors)
      .then(res => res)
      .then(json => {
        dispatch(fetchEnrollments(json));
      })
  };
};
export const enableEnrollementForm = (status) => {
  return {
    type: ENROLLEMENT_FORM_ENABLE,
    payload: status
  }
};
export const addEnrollement = (enrollement) => {
  enrollementService.AddEnrollement(enrollement)
  return {
    type: ENROLLEMENT_ADD_NEW_FORM,
    payload: enrollement
  }
};