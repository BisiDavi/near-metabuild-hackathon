import * as yup from 'yup';

export const reviewerProfileFormSchema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup
    .string()
    .email('Enter a valid email address')
    .required('E-mail address is required'),
  intro: yup.string().required('Description is required'),
  price: yup.string().required('Price is required'),
});
