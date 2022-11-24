/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import useFirebase from '@/hooks/useFirebase';

export default function Auth() {
  const { googleProviderReviewer } = useFirebase();

  return (
    <div className="flex h-screen w-full items-center">
      <div className="relative h-full w-4/5">
        <Image src="/auth-banner.webp" className="h-full" alt="banner" fill />
      </div>
      <div className="flex h-full w-1/5  flex-col items-center justify-center bg-gray-400">
        <div className="text-xl font-bold text-white">Login to Dashboard</div>
        <button
          className="hover-bg-opacity relative my-8 mx-auto flex  w-auto items-center rounded-md bg-white px-4 py-1.5  text-lg font-bold hover:bg-red-300 hover:text-white"
          onClick={googleProviderReviewer}
        >
          <img
            src="/google-icon.png"
            className="mr-4 w-1/6"
            alt="google signup/login"
          />
          login/signup
          <span className="absolute -right-1.5 -top-1 inline-flex h-3  w-3 animate-ping rounded-full bg-red-500"></span>
          <span className="absolute -right-1.5 -top-1 inline-flex h-3 w-3 rounded-full bg-red-500"></span>
        </button>
      </div>
    </div>
  );
}
