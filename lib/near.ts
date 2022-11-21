import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';
import { formatNearAmount } from 'near-api-js/lib/utils/format';

import environment from '@/lib/nearConfig';

const nearEnv: any = environment('testnet');

export async function initializeContract() {
  const near = await connect(
    Object.assign(
      { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
      nearEnv,
    ),
  );
  // console.log('near', near);
  const walletConnection = new WalletConnection(near, 'NEAR-RESUME');
  const accountId = walletConnection.getAccountId();
  const contract = new Contract(
    walletConnection.account(),
    nearEnv.contractName,
    {
      viewMethods: ['get_resume', 'get_resumes'],
      changeMethods: ['buy_resume', 'set_resume'],
    },
  );
  return { accountId, contract, walletConnection };
}

export async function accountBalance() {
  const { walletConnection } = await initializeContract();
  return formatNearAmount(
    (await walletConnection.account().getAccountBalance()).total,
    2,
  );
}

export async function getAccountId() {
  const { walletConnection } = await initializeContract();
  return walletConnection.getAccountId();
}

export async function login(resumeId: string) {
  const { walletConnection } = await initializeContract();
  walletConnection.requestSignIn({
    contractId: nearEnv.contractName,
    successUrl: `https://near-metabuild-hackathon.vercel.app/payment?template=${resumeId}&login=successful`,
    failureUrl: `https://near-metabuild-hackathon.vercel.app/payment?template=${resumeId}&login=failure`,
  });
}

export async function logout() {
  const { walletConnection } = await initializeContract();
  walletConnection.signOut();
}

export async function isSignedIn() {
  const { walletConnection } = await initializeContract();
  return walletConnection.isSignedIn();
}
