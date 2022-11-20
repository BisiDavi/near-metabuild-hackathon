/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import { login } from '@/lib/near';

export default function NEAROverlay() {
  const router = useRouter();
  const routePath = router.asPath;

  const nearKeyArray = routePath?.split('all_keys=');
  const nearKey = nearKeyArray.length === 2 ? nearKeyArray[1] : '';
  const loginSuccess = routePath.includes('all_keys') ? 'hidden' : '';
  console.log('routePath', routePath);
  console.log('nearKey', nearKey);

  return (
    <div
      className={`overlay left-0 ${loginSuccess} absolute z-20 flex h-full w-full flex-col flex-col items-center justify-center bg-gray-400 bg-opacity-60`}
    >
      <div className="flex  items-center text-xl font-bold text-white">
        Connect to <img src="/near.png" className="mx-1 w-8" alt="near-icon" />{' '}
        NEAR TEST-WALLET to make payment{' '}
      </div>
      <Button
        text="Login to NEAR Test-Wallet"
        className="my-5 flex items-center rounded-full border-2 px-4 py-1 font-bold text-white hover:bg-white hover:text-blue-500"
        iconUrl="/near.png"
        onClick={login}
      />
    </div>
  );
}
