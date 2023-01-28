import * as yup from 'yup';

const postRequestIDSchema = yup.number().required('id is required');

export { postRequestIDSchema };
