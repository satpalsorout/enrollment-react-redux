import React, { Component } from 'react';
import { connect } from "react-redux";
import { enableEnrollementForm } from '../actions/enrollement-actions';
import { bindActionCreators } from 'redux'
import EnrollmentTable from './enrollement-table';
import style from '../css/enrollement.css'
class EnrollementDashboard extends Component {
    enableEnrollmentForm() {
        this.props.enableEnrollementForm(true);
    }


    render() {
        return (
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Enrollements</b></h2>
                            </div>

                            <div className="col-sm-6">
                                <a className="btn btn-success" data-toggle="modal" onClick={this.enableEnrollmentForm.bind(this)}><i className="material-icons" >&#xE147;</i> <span >Add New Enrollement</span></a>
                            </div>
                        </div>
                    </div>
                    <EnrollmentTable />
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        activateForm: state.ActivateEnrollmentForm
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ enableEnrollementForm: enableEnrollementForm }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EnrollementDashboard);
