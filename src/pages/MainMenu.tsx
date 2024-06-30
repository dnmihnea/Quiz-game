import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

interface FormValues {
  username: string
  password: string;
}

const MainMenu: React.FC = () => {
  const navigate = useNavigate();
  const initialValues: FormValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required'),
    password: Yup.string()
      .required('Password is required'),
  });

  const onSubmit = (values: FormValues, { setSubmitting, setErrors }) => {
    setSubmitting(true);

    // Custom validation for username and password
    if (values.username !== 'AlexDinusaur' || values.password !== 'truthwelltold') {
      setErrors({ username: 'Invalid Username', password: 'Invalid Password' });
    } else {
      navigate('/home');
      alert('Welcome Alex');
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username: </label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
};



  // return (
  //   <div>
  //     <h1>Main Menu</h1>
  //     <button onClick={() => navigate('/home')}>Enter</button>
  //     <button onClick={() => navigate('/info')}>Instructions</button>
  //   </div>
  // );


export default MainMenu;