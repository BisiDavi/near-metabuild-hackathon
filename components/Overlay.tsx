import { useState } from 'react';
import Button from '@/components/Button';
import useFirebase from '@/hooks/useFirebase';

export default function Overlay() {
  const { googleProvider } = useFirebase();
  const [showOverlay, setShowOverlay] = useState(true);

  function googleHandler() {
    googleProvider(setShowOverlay);
  }

  const displayOverlay = showOverlay ? 'hidden' : '';

  return (
    <div
      className={`overlay ${displayOverlay} absolute z-20 flex h-full w-full flex-col items-center justify-center bg-gray-500 bg-opacity-80`}
    >
      <h4 className="z-40 text-center text-4xl font-bold text-white opacity-100">
        Please Login to continue
      </h4>
      <Button
        text="Login with Google"
        className="my-2 flex items-center rounded-full border bg-white px-6 py-2 text-xl font-bold text-blue-500 hover:bg-gray-300"
        iconUrl="/google-icon.png"
        onClick={googleHandler}
      />
    </div>
  );
}
