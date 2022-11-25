import {
  connect,
  Contract,
  keyStores,
  WalletConnection,
  providers,
} from 'near-api-js';
import { formatNearAmount } from 'near-api-js/lib/utils/format';

import environment from '@/lib/nearConfig';

const nearEnv: any = environment('testnet');

export async function getTransactionState(txtHash: string, accountId: string) {
  const provider = new providers.JsonRpcProvider(
    'https://archival-rpc.testnet.near.org',
  );
  const result = await provider.txStatus(txtHash, accountId);
  console.log('result-getTransactionState', result);
  return result;
}

export async function initializeContract() {
  const near = await connect(
    Object.assign(
      { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
      nearEnv,
    ),
  );
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

export async function accountDetails() {
  const { walletConnection } = await initializeContract();
  return await walletConnection.account();
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

export async function reviewerLogin() {
  const { walletConnection } = await initializeContract();
  walletConnection.requestSignIn({
    contractId: nearEnv.contractName,
    successUrl: `https://near-metabuild-hackathon.vercel.app/cv/reviewer/dashboard?login=successful`,
    failureUrl: `https://near-metabuild-hackathon.vercel.app/cv/reviewer/dashboard?login=failure`,
  });
}

export async function logout() {
  const { walletConnection } = await initializeContract();
  return walletConnection.signOut();
}

export async function isSignedIn() {
  const { walletConnection } = await initializeContract();
  return walletConnection.isSignedIn();
}
