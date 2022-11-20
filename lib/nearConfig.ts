import { KeyPair, keyStores } from 'near-api-js';
export default async function environment(env: string) {
  const myKeyStore = new keyStores.InMemoryKeyStore();
  const PRIVATE_KEY =
    'by8kdJoJHu7uUkKfoaLd2J2Dp1q1TigeWMG123pHdu9UREqPcshCM223kWadm';
  const keyPair = KeyPair.fromString(PRIVATE_KEY);

  await myKeyStore.setKey('testnet', 'near-resume.olubisidavid.testnet', keyPair);
  const CONTRACT_NAME =
    process.env.NEXT_PUBLIC_CONTRACT_NAME || 'near-resume.olubisidavid.testnet';
  switch (env) {
    case 'mainnet':
      return {
        networkId: 'mainnet',
        keyStore: myKeyStore,
        nodeUrl: 'https://rpc.mainnet.near.org',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.near.org',
        helperUrl: 'https://helper.mainnet.near.org',
        explorerUrl: 'https://explorer.mainnet.near.org',
      };

    case 'testnet':
      return {
        networkId: 'testnet',
        keyStore: myKeyStore,
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
