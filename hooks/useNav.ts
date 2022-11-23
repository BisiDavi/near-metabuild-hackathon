/* eslint-disable react-hooks/exhaustive-deps */
import { usePathname } from 'next/navigation';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import useFirebase from '@/hooks/useFirebase';

export default function useNav() {
  const { getAuthdetails, authSignOut } = useFirebase();
  const queryClient = new QueryClient();

  const { data: authData, status: authStatus } = useQuery(
    ['getAuthdetails'],
    getAuthdetails,
  );

  const { mutate: signOutMutate }: any = useMutation(authSignOut, {
    onSettled: () => {
      queryClient.invalidateQueries(['getAuthdetails']);
    },
    onSuccess: () => {
      toast.success("You're logged out.");
    },
    onError: () => {
      toast.error('on able to log you out.');
    },
  });

  const pathname = usePathname();
  const name =
    authStatus === 'success'
      ? authData?.displayName
        ? authData?.displayName
        : authData?.email
      : '';

  return {
    pathname,
    name,
    authSignOut,
    authData,
    authStatus,
    signOutMutate,
  };
}
