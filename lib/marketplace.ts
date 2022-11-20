import { uuidv4 } from '@firebase/util';
import { parseNearAmount } from 'near-api-js/lib/utils/format';

import { initializeContract } from '@/lib/near';

const GAS = 100000000000000;

export async function createResume(resume: any) {
  const { contract }: any = await initializeContract();
  resume.id = uuidv4();
  resume.price = parseNearAmount(resume.price + '');
  return contract.set_resume({ resume });
}

export async function getResumes() {
  const { contract }: any = await initializeContract();
  return contract.get_resumes();
}

export async function getResume(id: string) {
  const { contract }: any = await initializeContract();
  return contract.get_resume(id);
}

export async function buyResume({ id, price }: { id: string; price: string }) {
  const { contract }: any = await initializeContract();
  contract.buy_resume({ resume_id: id }, GAS, price);
}
