import useNav from '@/hooks/useNav';
import { FormProvider, useForm } from 'react-hook-form';

export default function ReviewerProfileForm() {
  const { authData } = useNav();
  const defaultfullName = authData?.displayName;
  const defaultEmail = authData?.email;

  const methods = useForm({
    // resolver: yupResolver(formSchema),
    defaultValues: {
      fullName: defaultfullName,
      email: defaultEmail,
      intro: '',
      price: '',
    },
  });
  const { register } = methods;

  return (
    <FormProvider {...methods}>
      <form className="mt-3 flex w-1/2 flex-col rounded bg-gray-100 p-6 ">
        <input
          className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
          placeholder="Full name"
          {...register('fullName')}
        />
        <input
          type="email"
          className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
          placeholder="Email Address"
          {...register('email')}
        />
        <textarea
          placeholder="A short description about you as a recruiter and resume reviewer"
          className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
          rows={3}
          {...register('intro')}
        ></textarea>
        <select
          className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
          {...register('price')}
        >
          <option>
            Hire rate (how much in NEAR do you charge for resume review)
          </option>
          <option>1 NEAR</option>
          <option>2 NEAR</option>
          <option>3 NEAR</option>
          <option>4 NEAR</option>
          <option>5 NEAR</option>
        </select>
        <button className="mx-auto w-24 rounded-lg border bg-blue-500 py-1 text-white hover:bg-opacity-70">
          Submit
        </button>
      </form>
    </FormProvider>
  );
}
