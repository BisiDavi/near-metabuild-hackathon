import Image from 'next/image';
import useFirebase from '@/hooks/useFirebase';

export default function Auth() {
  const { googleProviderReviewer } = useFirebase();

  return (
    <div className="flex h-screen w-full items-center">
      <div className="relative h-full w-4/5">
        <Image src="/auth-banner.webp" className="h-full" alt="banner" fill />
      </div>
      <div className="flex w-1/5 items-center justify-center bg-white">
        <button
          className="hover-bg-opacity relative my-8 mx-auto flex w-auto rounded-md bg-blue-500 px-4 py-1.5 font-bold text-white"
          onClick={googleProviderReviewer}
        >
          login/signup as Reviewer
          <span className="absolute -right-1.5 -top-1 inline-flex h-3  w-3 animate-ping rounded-full bg-red-500"></span>
          <span className="absolute -right-1.5 -top-1 inline-flex h-3 w-3 rounded-full bg-red-500"></span>
        </button>
      </div>
    </div>
  );
}
