import { Formik, Form } from 'formik';

export function FormikForm(props) {
  const onSubmit = (values, actions) => props.onSubmit(values, actions);
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={props.schema}
      validateOnMount={true}
      initialValues={props.initialValues}
    >
      <Form autoComplete="off">{props.children}</Form>
    </Formik>
  );
}
