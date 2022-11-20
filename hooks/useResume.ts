import { getResumes, getResume, buyResume } from '@/lib/marketplace';
import { isSignedIn } from '@/lib/near';

export default function useResume() {
  async function fetchResumes() {
    return await getResumes();
  }

  async function fetchResume(id: string) {
    return await getResume(id);
  }

  async function isUserSignedToNear() {
    return await isSignedIn();
  }

  async function makePayment({ id, price }: { id: string; price: any }) {
    return await buyResume({ id, price });
  }

  return { fetchResumes, fetchResume, isUserSignedToNear, makePayment };
}
