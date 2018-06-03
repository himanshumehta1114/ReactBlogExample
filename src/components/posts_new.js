import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
    renderField(field) {
        const { meta : {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values){
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="Title for post" name="title" component={this.renderField} />
                <Field label="categories" name="categories" component={this.renderField} />
                <Field label="Content" name="content" component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title || values.title.length < 3){
        errors.title = 'Please enter a valid name';
    }

    if(!values.categories){
        errors.categories = 'Please enter a category';
    }

    if(!values.content){
        errors.content = 'Please enter validation';
    }

    return errors;
}

export default reduxForm({
    validate,
    form : 'PostsNewForm'
})(PostsNew);
