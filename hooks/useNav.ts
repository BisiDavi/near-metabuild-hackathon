/* eslint-disable react-hooks/exhaustive-deps */
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import useFirebase from '@/hooks/useFirebase';

export default function useNav() {
  const [auth, setAuth] = useState<any>(null);
  const pathname = usePathname();
  const { getAuthdetails, authSignOut } = useFirebase();
  const name = auth
    ? auth?.displayName
      ? auth?.displayName
      : auth?.email
    : '';

  useEffect(() => {
    if (auth === null) {
      const authDetails = getAuthdetails();
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
