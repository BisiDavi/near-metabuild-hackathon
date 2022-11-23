import { useState } from 'react';

import Button from '@/components/Button';
import useFirebase from '@/hooks/useFirebase';
import useNav from '@/hooks/useNav';

export default function Overlay() {
  const { googleProvider } = useFirebase();
  const [showOverlay, setShowOverlay] = useState(true);
  const { authData, authStatus } = useNav();

  function googleHandler() {
    return googleProvider(setShowOverlay);
  }

  const displayOverlay = showOverlay ? '' : 'hidden';

  return (
    <>
      {authStatus === 'error' ? (
        'unable to fetch auth status'
      ) : authStatus === 'loading' ? (
        'fetching auth status...'
      ) : !authData ? (
        <div
          className={`overlay ${displayOverlay} absolute z-20 flex h-full w-full flex-col items-center justify-center bg-gray-500 bg-opacity-80`}
        >
          <h4 className="z-40 text-center text-4xl font-bold text-white opacity-100">
            Please login to continue
          </h4>
          <Button
            text="Login with Google"
            className="my-5 flex items-center rounded-full border bg-white px-6 py-2 text-xl font-bold text-blue-500 hover:bg-gray-300"
            iconUrl="/google-icon.png"
            onClick={googleHandler}
          />
        </div>
      ) : null}
    </>
  );
}
