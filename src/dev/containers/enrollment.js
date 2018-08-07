import React, { Component } from 'react'
import { connect } from 'react-redux';
import EnrollementForm from '../components/enrollement-form';
import EnrollementDashboard from '../components/enrollment-dashboard';

class Enrollement extends Component {
    render() {
        if (this.props.ActivateEnrollmentForm.ActivateEnrollmentForm && this.props.ActivateEnrollmentForm.ActivateEnrollmentForm) {
            return (<EnrollementForm />)
        }
        else {
            return (<EnrollementDashboard />)
        }

    }
}
function mapStateToProps(state) {
    return {
        ActivateEnrollmentForm: state.ActivateEnrollmentForm
    }
}
export default connect(mapStateToProps)(Enrollement)

