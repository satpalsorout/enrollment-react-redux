import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addEnrollement } from '../actions/enrollement-actions';
class EnrollementForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            name: '',
            email: '',
            phone: ''
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Name is required";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Phone
        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "phone is required";
        }

        if (typeof fields["phone"] !== "undefined") {
            if (!fields["phone"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["phone"] = "Only degits";
            }
        }
        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "email is required";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        if (this.handleValidation()) {
            this.submit();
        } else {
            e.preventDefault();
        }
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });

        const {
            name, value
        } = e.target;
        if (name === 'name') {
            this.setState({
                name: value
            })
        }
        if (name === 'phone') {
            this.setState({
                phone: value
            })
        }
        if (name === 'email') {
            this.setState({
                email: value
            })
        }
    }
    submit() {
        var data = { name: this.state.name, email: this.state.email, phone: this.state.phone }
        this.props.addEnrollement(data)

    }
    render() {
        return (
            <div className="container-fluid">
                <h1>Bootcam Enrollement Form</h1>
                <form name="contactform" className="contactform" onSubmit={this.contactSubmit.bind(this)} >
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" name="name" required={true} onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} class="form-control" />
                        <small className="text-danger" >{this.state.errors["name"]}</small>
                    </div>
                    <div className="form-group">

                        <label >Email</label>
                        <input type="email" name="email" className="form-control" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                        <small className="text-danger" >{this.state.errors["email"]}</small>
                    </div>
                    <div className="form-group">
                        <label >Phone</label>
                        <input type="tel" name="phone" className="form-control" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]} />
                        <small className="text-danger" >{this.state.errors["phone"]}</small>
                    </div>
                    <div className="form-group">
                        <select className="custom-select" name="topic" >
                            <option value="default">I am intrested in</option>
                            <option ></option>
                        </select>
                        <small className="text-danger"> </small>
                    </div>

                    <div className="mb-3">
                        <label >Time preference</label>
                        <div className="form-check">
                            <input name="timePreference" value="morning" type="radio" className="form-check-input" />
                            <label className="form-check-label">Morning (9AM - 12PM)</label>
                        </div>
                        <div className="form-check">
                            <input name="timePreference" type="radio" value="evening" className="form-check-input" />
                            <label className="form-check-label">Evening (5PM - 8PM)</label>
                        </div>
                    </div>
                    <div className="form-check mb-3">
                        <input name="Subscribe" type="checkbox" className="form-check-input" />
                        <label className="form-check-label">Send me promotional offers</label>

                    </div>

                    <button onClick={this.onSubmit} className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addEnrollement: addEnrollement }, dispatch);
}
export default connect(matchDispatchToProps)(EnrollementForm) 
