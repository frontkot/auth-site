import React from 'react';
import classes from './EntryForm.module.scss';
import { Formik, Form, Field } from 'formik';
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/user/actions';
import { isOpenWindow } from '../../store/modalWindow/actions';

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
  const dispatch = useDispatch();
  const submitLogin = (values) => {
    const user = {name: values.name, email: values.email};
    dispatch(isOpenWindow(false))
    dispatch(userLogin(user));
  };

  const { container, field, submit } = classes;


  return (
    <Formik 
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={submitLogin}
    >
      {({ errors, touched }) => (
        <Form className={container}>
          <Field
            type='text'
            name='name'
            placeholder='Your name'
            className={field}

          />
          {errors.name && touched.name ? (
            <div className={classes}>{errors.name}</div>
          ) : null}

          <Field
            type='email'
            name='email'
            placeholder='Your email'
            className={field}
          />
          {errors.email && touched.email ? (
            <div className={classes}>{errors.email}</div>
          ) : null}

          <Field 
            type='submit'
            name='submit'
            value='Sign in'
            className={submit}
          />
        </Form>
      )}
    </Formik>
  );
};

export default EntryForm;