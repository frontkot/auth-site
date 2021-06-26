import React from 'react';
import classes from './EntryForm.module.scss';
import { Formik, Form, Field } from 'formik';
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required')
    .min(2, "The name is too short!")
    .max(50, "The name is too long!"),
  email: yup
    .string()
    .email('Invalid email')
    .required('Required'),
})

const EntryForm = () => {
  return (
    <Formik 
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={}
    >
      {({ errors, touched }) => (
        <Form className={classes}>
          <Field
            type='text'
            name='name'
            placeholder='Your name'
            label='Name'
            className={classes}
          />
          {errors.name && touched.name ? (
            <div className={classes}>{errors.name}</div>
          ) : null}

          <Field
            type='email'
            name='email'
            placeholder='Your email'
            label='Email'
            className={classes}
          />
          {errors.email && touched.email ? (
            <div className={classes}>{errors.email}</div>
          ) : null}

          <Field 
            type='submit'
            name='submit'
            value='Sign in'
            className={classes}
          />
        </Form>
      )}
    </Formik>
  );
};

export default EntryForm;