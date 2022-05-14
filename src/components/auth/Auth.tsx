import { Formik } from 'formik';
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
import style from './Auth.module.scss'

function Auth() {
    const navigate = useNavigate()

    interface FormValues {
        username: string,
        password: string
    }

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .typeError('Должно быть строкой')
            .required('Обязательное поле'),
        password: yup
            .string()
            .matches(/^\d+$/, 'Введите только цифры')
            .required('Обязательное поле')
    })

    return (
        <div className="auth">
            <div className="container">
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    validateOnBlur
                    onSubmit={(values: FormValues) => {
                        console.log("values :", values);
                        navigate('/main')
                    }}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }: any): any => (
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
    );
}

export default Auth;
