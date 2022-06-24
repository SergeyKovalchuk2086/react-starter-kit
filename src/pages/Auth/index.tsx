import { Formik } from 'formik';
import { validationAuthSchema } from '../../utils/validationSchems'
import { observer } from "mobx-react-lite"
import style from './styles.module.scss'
import stores from '../../store';
import { useNavigate } from 'react-router';
import { appRoutes } from '../../configs';

const initialValues = {
  username: '',
  password: ''
}

type TValuesForm = typeof initialValues

const Auth = () => {
  const authStore = stores.authStore

  const navigate = useNavigate()

  const onSubmit = (values: TValuesForm) => {
    console.log('values: ', values);
    authStore.setIsAuth(true)
    navigate(appRoutes.home)
  }

  return (
    <div className="auth">
      <div className="container">
        <Formik
          initialValues={initialValues}
          validateOnBlur
          onSubmit={onSubmit}
          validationSchema={validationAuthSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }: any): JSX.Element => (
            <div className={style.content}>
                <div className={style.content__body}>
                    <p>Login</p>
                    <div className={style.content__body_username}>
                        <label htmlFor={`username`}>Username</label>
                        <input
                            type={`text`}
                            name={`username`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                        />
                    </div>
                    {touched.username && errors.username && <div className={style.content__body_error}>{errors.username}</div>}
                    <div className={style.content__body_password}>
                        <label htmlFor="2">Password</label>
                        <input
                            type={`password`}
                            name={`password`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </div>
                    {touched.password && errors.password && <div className={style.content__body_error}>{errors.password}</div>}
                    <button
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                        type='submit'
                    >
                        LOGIN
                    </button>
                </div>
            </div>
            )}
        </Formik>
      </div>
    </div>
  )
}

export default observer(Auth)
