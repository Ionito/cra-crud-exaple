import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
    renderError = ({ touched, error }) => {
        if (touched && error) {
            return (
                <div className="ui error  message">
                    <div className="header">{error}</div>
                </div>
            )
        }
        return null
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched}? 'error':''`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field
                    name="title"
                    component={this.renderInput}
                    label="Enter title"
                />
                <Field
                    name="description"
                    component={this.renderInput}
                    label="Enter description"
                />
                <button className="ui button primary">submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = 'You mast enter a title'
    }
    if (!formValues.description) {
        errors.description = 'You mast enter a description'
    }
    return errors
}

export default reduxForm({ form: 'streamForm', validate })(StreamForm)
