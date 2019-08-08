// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Alert } from "reactstrap";
import PortInput from "../form/PortInput";

const validateInputs = values => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!values[key]) {
      errors[key] = `* ${key} is required`;
    }
  });
  return errors;
};

const PortfolioCreateForm = ({ initialValues, onSubmit, error }) => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
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

          {error && <Alert color="danger">{error}</Alert>}

          <Button outline color="info" type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;
