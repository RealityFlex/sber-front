import * as yup from 'yup';

export const schema = yup.object().shape({
  file: yup.mixed().required('Обязательное поле'),
});