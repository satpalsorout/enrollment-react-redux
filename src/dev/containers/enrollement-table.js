import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchEnrollments, selectedEnrollement, deleteEnrollement } from '../actions/enrollement-actions';
import { bindActionCreators } from 'redux'
import EnrollementPop from './enrollement-popup'
import style from '../css/enrollement.css';
class EnrollmentTable extends Component {
    componentDidMount() {
        this.props.fetchEnrollments();
    }


    toCamelCase(str) {
        return str.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function (match) {
            return match.charAt(match.length - 1).toUpperCase();
        });
    }
    deleteRow(enrollment) {
        this.props.deleteEnrollement(enrollment);
    }
    createColumns(enrollment) {
        var columns = Object.keys(enrollment)
        return (
            <thead key={'thead' + '_' + enrollment.id}>
                <tr>
                    <th>
                        <span className="custom-checkbox">
                            <input type="checkbox" id="selectAll" />
                            <label htmlFor="selectAll"></label>
                        </span>
                    </th>
                    {columns.map((key, index) => {
                        if (key !== 'id') {
                            return (<th key={index} > {this.toCamelCase(key)} </th>)
                        }
                        else {
                            return null;
                        }
                    })
                    }
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
        );
    }
    createRows(enrollement) {
        return (
            <tr key={'tr' + '_' + enrollement.id}>
                {
                    <td>
                        <span className="custom-checkbox">
                            <input type="checkbox" id={"checkbox" + enrollement.id} name="options[]" value={enrollement.id} />
                            <label htmlFor={"checkbox" + enrollement.id}></label>
                        </span>
                    </td>
                }
                {Object.keys(enrollement).map((key, index) => {
                    if (key !== 'id') {
                        return (<td key={index + '_' + enrollement.id + '_' + enrollement[key]} > {enrollement[key]} </td>)
                    }
                    else {
                        return null;
                    }
                })
                }
                {
                    <td>
                        <a className="edit" key={"Edit_" + enrollement.id} onClick={() => this.props.selectedEnrollement(enrollement)} data-toggle="modal"><i key={"Edit_" + enrollement.id} className="material-icons" data-toggle="tooltip" title="EDIT">&#xE254;</i></a>
                    </td>
                }
                {
                    <td>
                        <a key={"Delete_" + enrollement.id} className="delete" onClick={this.deleteRow.bind(this, enrollement)} data-toggle="modal"><i key={"Delete_" + enrollement.id} className="material-icons" data-toggle="tooltip" title="DELETE">&#xE872;</i></a>
                    </td>
                }
            </tr>
        );

    }
    render() {
        const { error, loading } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <table className="table table-striped table-hover">
                    {this.props.enrollments && this.props.enrollments.map((enrollment, index) => {

                        if (index === 0) {
                            return this.createColumns(enrollment)
                        }
                    }
                    )}
                    <tbody>
                        {this.props.enrollments && this.props.enrollments.map((enrollment, index) => {

                            if (index > -1) {
                                return this.createRows(enrollment)
                            }
                        }
                        )}
                    </tbody>
                </table>
                <EnrollementPop />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        enrollments: state.fetchEnrollmentReducer.items,
        loading: state.fetchEnrollmentReducer.loading,
        error: state.fetchEnrollmentReducer.error,
        deleteEnrollment: state.deleteEnrollmentReducer.deleteEnrollment
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchEnrollments: fetchEnrollments, selectedEnrollement: selectedEnrollement, deleteEnrollement: deleteEnrollement }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EnrollmentTable);