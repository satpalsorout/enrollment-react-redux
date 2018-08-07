import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateEnrollement, removedSelectedEnrollment } from '../actions/enrollement-actions';
import { bindActionCreators } from 'redux'
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import style from '../css/enrollement.css';
class EnrollementPop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: () => this.props.enrollement ? true : false,
            name: '',
            email: '',
            phone: ''
        }
    }
    _closeModal() {
        this.props.removedSelectedEnrollment();
        this.setState({ showModal: false })
    }
    OnChangeName(_name) {
        this.state = {
            name: _name,
            email: this.state.email,
            phone: this.state.phone

        }
    }
    OnChangePhone(_phone) {
        this.state = {
            phone: _phone,
            email: this.state.email,
            name: this.state.name
        }
    }
    OnChangeEmail(_email) {
        this.state = {
            email: _email,
            name: this.state.name,
            phone: this.state.phone
        }
    }

    createModal(enrollment) {
        if (enrollment !== undefined && enrollment !== null) {
            this.state = {
                name: this.props.enrollement.selectedEnrollment.name,
                email: this.props.enrollement.selectedEnrollment.email,
                phone: this.props.enrollement.selectedEnrollment.phone,
                showModal: () => this.props.enrollement ? true : false
            }

            return (<Modal
                isOpen={this.state.showModal}
                onDismiss={this._closeModal.bind(this)}
                isBlocking={false}
                containerClassName="ms-modalExample-container"
            >

                <div className="ms-modalExample-body" style={{ width: 600 }} >
                    <div className="docs-TextFieldExample" style={{ width: 590 }}>
                        <TextField id="name" name="name" label="Name" onChanged={this.OnChangeName.bind(this)} value={enrollment && enrollment.name} required={true} />
                        <TextField name="email" label="Email" onChanged={this.OnChangeEmail.bind(this)} value={enrollment && enrollment.email} required={true} />
                        <TextField name="phone" label="Phone" onChanged={this.OnChangePhone.bind(this)} value={enrollment && enrollment.phone} required={true} />
                        <PrimaryButton type="submit" onClick={this.updateEnrollmentData.bind(this)}>Save</PrimaryButton>

                    </div>
                </div>
            </Modal>);
        }
        else {
            null
        }
    }
    updateEnrollmentData() {
        var data = { id: this.props.enrollement.selectedEnrollment.id, name: this.state.name, email: this.state.email, phone: this.state.phone }
        this.props.updateEnrollement(data);
        this._closeModal();
    }
    render() {
        if (this.props.enrollement && this.props.enrollement.selectedEnrollment !== null) {
            return this.createModal(this.props.enrollement.selectedEnrollment);
        }
        else {
            return ''
        }
    }
}
function mapStateToProps(state) {
    return {
        enrollement: state.selectedEnrollmentReducer
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateEnrollement: updateEnrollement, removedSelectedEnrollment: removedSelectedEnrollment }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EnrollementPop);