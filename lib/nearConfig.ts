import { keyStores } from 'near-api-js';
export default function environment(env: string) {
  const CONTRACT_NAME =
    process.env.NEXT_PUBLIC_CONTRACT_NAME || 'near-resume.olubisidavid.testnet';
  switch (env) {
    case 'mainnet':
      return {
        networkId: 'mainnet',
        keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        nodeUrl: 'https://rpc.mainnet.near.org',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.near.org',
        helperUrl: 'https://helper.mainnet.near.org',
        explorerUrl: 'https://explorer.mainnet.near.org',
      };

    case 'testnet':
      return {
        networkId: 'testnet',
        keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        nodeUrl: 'https://rpc.testnet.near.org',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://explorer.testnet.near.org',
      };
    default:
      throw Error(`Unknown environment '${env}'.`);
  }
}

