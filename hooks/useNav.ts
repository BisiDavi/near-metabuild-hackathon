/* eslint-disable react-hooks/exhaustive-deps */
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import useFirebase from '@/hooks/useFirebase';

export default function useNav() {
  const [auth, setAuth] = useState(null);
  const pathname = usePathname();
  const { getAuthdetails, authSignOut } = useFirebase();
  const authDetails = getAuthdetails();
  const name = authDetails?.displayName
    ? authDetails?.displayName
    : authDetails?.email;

  useEffect(() => {
    if (auth === null) {
      setAuth(authDetails);
    }
  }, [auth]);

  return {
    pathname,
    name,
    authSignOut,
    auth,
  };
}
