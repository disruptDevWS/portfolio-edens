// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "reactstrap";
import PortInput from "../form/PortInput";

const validateInputs = values => {
  let errors = {};

  Object.entries(value).forEach(([key, value]) => {
    if (!values[key]) {
      errors[key] = `* ${key} is required`;
    }
  });
  return errors;
};

const INITIAL_VALUES = {
  title: "",
  company: "",
  location: "",
  position: "",
  description: ""
};

const PortfolioCreateForm = props => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="portfolio_form">
          <Field type="text" name="title" label="Title" component={PortInput} />

          <Field
            type="text"
            name="company"
            label="Company"
            component={PortInput}
          />

          <Field
            type="text"
            name="location"
            label="Location"
            component={PortInput}
          />

          <Field
            type="text"
            name="position"
            label="Position"
            component={PortInput}
          />

          <Field
            type="textarea"
            name="description"
            label="Description"
            component={PortInput}
          />

          <Button outline color="info" type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;
