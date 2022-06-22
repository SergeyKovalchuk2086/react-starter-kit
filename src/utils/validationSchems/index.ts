import * as yup from 'yup'

export const validationAuthSchema = yup.object().shape({
  username: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  password: yup
    .string()
    .matches(/^\d+$/, 'Введите только цифры')
    .required('Обязательное поле')
})
