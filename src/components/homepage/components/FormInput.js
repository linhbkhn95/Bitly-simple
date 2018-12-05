import React from "react";
import { Field, reduxForm } from "redux-form";
import { addLink } from "../../../store/actions/linkAction";
import { connect } from "react-redux";
class FormInput extends React.Component {
  onSubmit(values) {
    console.log("valuedasda", values);
    this.props.addLink(values, () => {
      // this.props.history.push("/");
    });
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <React.Fragment>
      <input
        {...input}
        placeholder={label}
        type={type}
        id="shorten_url"
        taborder="1"
        name="url"
        type="text"
        className="shorten-input"
        placeholder="Paste a link to shorten it"
        // value=""
        // autocomplete="off"
        // autocorrect="off"
        // autocapitalize="off"
      />
      {touched &&
        ((error && <span className="text-error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </React.Fragment>
  );
  render() {
    const { handleSubmit, anyTouched, submitting,invalid,valid } = this.props;

    return (
      <div id="form-input" className="text-center mid-container">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <fieldset className="cf">
            <Field name="full_link" type="text" component={this.renderField} />
            <input
              id="shorten_btn shorten-input"
              type="submit"
              disabled={invalid||!valid}
              className="button button-primary button-large shorten-button"
              value="Shorten"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}
const validate = values => {
  const errors = {};
  console.log("validatesss==>", values);
  if (!values.full_link || !values.full_link.trim()) {
    errors.full_link = "Link is not require ";
  }
  // Check for required fields
  // _each(FIELDS, (fieldObject, fieldName) => {
  //   // Check if the FIELDS config object has a custom validation function to run
  //   if (fieldObject.validation) {
  //     fieldObject.validation(values, errors);
  //   }

  //   // If the field is required as per the config object, check if the field is filled out
  //   if (fieldObject.required && !values[fieldName]) {
  //     errors[fieldName] = `Enter ${fieldName}`;
  //   }
  // });

  // If errors is empty, the form is fine to submit
  // If errors has any properties, redux form assumes form is invalid
  return errors;
};
export default reduxForm({
  validate,
  form: "FormInput"
})(
  connect(
    null,
    { addLink }
  )(FormInput)
);
