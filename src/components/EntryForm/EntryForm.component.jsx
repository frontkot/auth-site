import React from 'react';
import classes from './EntryForm.module.scss';
import { Formik, Form, Field } from 'formik';
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/user/actions';
import { isOpenWindow } from '../../store/modalWindow/actions';
import { toastr } from "react-redux-toastr";

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
    toastr.success('You are logged in', `Hello, ${user.name}`)
  };

  const { container, field, submit, errorMsg } = classes;


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
            <div className={errorMsg}>{errors.name}</div>
          ) : null}

          <Field
            type='email'
            name='email'
            placeholder='Your email'
            className={field}
          />
          {errors.email && touched.email ? (
            <div className={errorMsg}>{errors.email}</div>
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