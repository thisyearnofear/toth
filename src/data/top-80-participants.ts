// src/data/top-80-participants.ts
/**
 * Top 80 participants from /solana and /degen channels
 * Generated from fetch-channel-users.ts
 * Last updated: December 28, 2024
 */

export interface Participant {
  rank: number;
  fid: number;
  username: string;
  displayName: string;
  castCount: number;
  solanaAddress: string;
  ethAddress?: string;
  channel: 'solana' | 'degen';
}

// 80 participants - 40 from /solana, 40 from /degen
export const TOP_80_PARTICIPANTS: Participant[] = [
  { rank: 1, fid: 436428, username: 'hurric4n3ike', displayName: 'Hurric4n3 🌊✨🌪️✨🌊', castCount: 98, solanaAddress: 'Cmm9gLP6MgaFfjBFPosQsdrpGQZx41DAc5sB3TXCQDrg', ethAddress: '0x29f5dee65e1fb856b816eab4f0b702c10e5eaa34', channel: 'solana' },
  { rank: 2, fid: 306193, username: 'libapi.eth', displayName: 'libapi', castCount: 17, solanaAddress: 'FGyYiWQWmSim2uxf3VGep4EQywGvKgFgXLGdVT2FDaGK', ethAddress: '0x2f1689161ed466ee3a4acbac68b278c295ead606', channel: 'solana' },
  { rank: 3, fid: 294743, username: 'neonevm', displayName: 'Neon EVM', castCount: 7, solanaAddress: 'Fgt5FSynRniN3mkZdiwZbcUxe3D6ZmewNnNuyQhseh5g', ethAddress: '0x2903d946742062a5b3cefb27f5fab1b74c061861', channel: 'solana' },
  { rank: 4, fid: 350139, username: 'joshisdead.eth', displayName: 'joshisdead.eth', castCount: 4, solanaAddress: 'EE1wsFhCcseYyyNp7W7qef3tr2QhZKnwwKcuVCHC3j3B', ethAddress: '0x2e5e9c6358c201c4546b971c2b41882585e270df', channel: 'solana' },
  { rank: 5, fid: 871298, username: 'vanillasky', displayName: 'VanillaSky', castCount: 4, solanaAddress: 'GMnV2cZByVENuyzokoWdPqYMdWZa62omgz1h4QuAsKjj', ethAddress: '0xb205e587d38c4e71fbbaad5f7567043b1d273807', channel: 'solana' },
  { rank: 6, fid: 19175, username: 'vexalus', displayName: 'VEX', castCount: 3, solanaAddress: '8NdcaYUC1X5CP7FMDip78uqtqmCt8GcZdCzLRTYTihmb', ethAddress: '0x9a608d9f416518b5f11acf3dc5594c90d6998e2c', channel: 'solana' },
  { rank: 7, fid: 451420, username: 'greenginger', displayName: 'Green Ginger', castCount: 3, solanaAddress: '3643iWwacdV9jWqTpFXCeXGwbwghUoVHmtVyDWwCxmRK', ethAddress: '0x6ad517b0f8d01ee116711a0d1c97e0ec69096602', channel: 'solana' },
  { rank: 8, fid: 1074834, username: 'pluggg4u', displayName: '🔌 Plug4U', castCount: 3, solanaAddress: '9aQ15qWMC1dGH9htGjj4TkNGjGwui8VNSuqXFQaybmLb', ethAddress: '0x8a91753be252f8f3014ceeb23812ead862261477', channel: 'solana' },
  { rank: 9, fid: 1456429, username: 'unizsawp', displayName: 'Demons.eth', castCount: 3, solanaAddress: 'E7b1DYvrQePsct2qHKbu9hFB41LAMgHGdbp91fbKpnE1', ethAddress: '0x980559c5549b388a51dd77058e0181bd688ae7e6', channel: 'solana' },
  { rank: 10, fid: 5254, username: 'papa', displayName: 'Papajams', castCount: 2, solanaAddress: '4FzyJeDxqRn2SKwVLdh2gi9MCvrSvgkCvHDZnNyBpd5v', ethAddress: '0x55a5705453ee82c742274154136fce8149597058', channel: 'solana' },
  { rank: 11, fid: 373566, username: 'yoshiromare.eth', displayName: 'Yoshiro Mare', castCount: 2, solanaAddress: 'CFFyM3FxmT9yVESW8D82TC5xsczpX2LAJbY1RqkSM3eJ', ethAddress: '0xb95c2b6794d31cbcd0c494a9141193335da3761b', channel: 'solana' },
  { rank: 12, fid: 663412, username: 'iomarkes', displayName: 'Markes', castCount: 2, solanaAddress: 'G2P7NLLfG8EcXjndX512uaUzRKEAAsXDhjo7M9uRLqGp', ethAddress: '0xad26a94199b59e792e3b7885d6f76fe9bd9afb39', channel: 'solana' },
  { rank: 13, fid: 534, username: 'mikedemarais.eth', displayName: 'mike rainbow ↑', castCount: 1, solanaAddress: '4Sur7qwxPcEAWYZcsiGhFSvxjpUCG6dwDzbzQzg3nonH', ethAddress: '0x5d25e3ebb10f4debf1d7b76eb94302d2d74c7035', channel: 'solana' },
  { rank: 14, fid: 754, username: 'ishika', displayName: 'Ishika', castCount: 1, solanaAddress: 'Bm5Zanszt3SgHLrhRVqskxSdPnpLVFVau5dJav6pyvC8', ethAddress: '0xf6591c74c46762d94765a6ad27368ceaf5cea475', channel: 'solana' },
  { rank: 15, fid: 4703, username: 'bytebot', displayName: 'Colin Charles', castCount: 1, solanaAddress: 'DpUDc3xn3thc2KABzJFAVnY1FowaXfjNkmd8XHoTBT2p', ethAddress: '0x2d66512827458d7a989eaa1a7da2ebf1cb7d640d', channel: 'solana' },
  { rank: 16, fid: 10095, username: 'juujuumama.eth', displayName: 'sierra renee', castCount: 1, solanaAddress: '8wDgM5dPW7swGUhFnypCusmBUVrZmqRKS8xhGE5AWX4R', ethAddress: '0x657c1f8421ae93e88fb3171f019779e87b0263ca', channel: 'solana' },
  { rank: 17, fid: 10420, username: 'lefteris.eth', displayName: 'Lefteris Karapetsas', castCount: 1, solanaAddress: 'GSdS5VPpMHNBKfhWvxLWDXVqtdZJVicRUW3Ck1f4yDBc', ethAddress: '0x2b888954421b424c5d3d9ce9bb67c9bd47537d12', channel: 'solana' },
  { rank: 18, fid: 13086, username: '6969', displayName: '696 | $m', castCount: 1, solanaAddress: '31tYDteAeXd1QwbMiM2w8vLuCZGUmyqddXnAnWyC1yB5', ethAddress: '0xf5819cc26f0481c9b86294b4c24027518a04bd5b', channel: 'solana' },
  { rank: 19, fid: 17114, username: 'matchaxyz', displayName: 'Matcha 🍵✨', castCount: 1, solanaAddress: '9FWSj2BnRaLnNkKaZHQbDqttYvFWwwfF6rdD2yMikCum', ethAddress: '0x717e49e0d8ebcc4b04e870011766136c8e1d2109', channel: 'solana' },
  { rank: 20, fid: 199443, username: 'ciocana.eth', displayName: 'Seeker', castCount: 1, solanaAddress: '7T7irBL87S8gduA4DMm5mFvFYQW3zCtQqQxcuixvnvBW', ethAddress: '0xd3930223f7c4836475fa72a43fa6c1e308d52f5e', channel: 'solana' },
  { rank: 21, fid: 247182, username: 'moong2.base.eth', displayName: 'moong2', castCount: 1, solanaAddress: '7KVhzrMn3Pu9AqyyPzUKZ3g2q3PPSsKJX1saJ8QbHmLC', ethAddress: '0xd0e46ff60dc7d5743878564938f804e451a69dc0', channel: 'solana' },
  { rank: 22, fid: 248300, username: '0xproject', displayName: '0x', castCount: 1, solanaAddress: '4QgtF8rKENVtQN2iL5r35qYy2jgZXgScCtQ18b6nboUy', ethAddress: '0x4c6cf5ee490740bbcaaf44b54cb202dd4dd6cfbb', channel: 'solana' },
  { rank: 23, fid: 250243, username: 'cryptoevmos.eth', displayName: 'Evmos 🎩🍖', castCount: 1, solanaAddress: 'AqALBqQfYNmmREqpzEFL8GSqqzWj1gvrGrs2KLe9zo7J', ethAddress: '0x933712dc96f1756eec845b62519db466eec35d3c', channel: 'solana' },
  { rank: 24, fid: 250575, username: 'watchcoin', displayName: 'Watchcoin', castCount: 1, solanaAddress: 'GrKnWv6NJoM3sZJpQZKgKw3hF4AdoxNNh8BLivEXPjzu', ethAddress: '0xc8abf679e14add9a6d6b6881cbdb4bca748cd2d0', channel: 'solana' },
  { rank: 25, fid: 268776, username: 'captainphilips', displayName: 'Phil', castCount: 1, solanaAddress: 'Gx6hSpWBYAuPTrZEPh3SHPWZZAoYxujdFezSfYoKoVC6', ethAddress: '0xc86dc68b6a57d45864d1f8bbe72fefaf070ba899', channel: 'solana' },
  { rank: 26, fid: 284991, username: 'ranggapuraji', displayName: 'Rangga Purnama Aji', castCount: 1, solanaAddress: 'EwAYrWWXhhkxGkP8vxZ1fX95ZkSBtCztJ6EHKZ4PHxF4', ethAddress: '0xc627fd4bec977b2845057e64153bbdbc88ef9333', channel: 'solana' },
  { rank: 27, fid: 296187, username: 'bestcryptotwits', displayName: '@BestCryptoTwits', castCount: 1, solanaAddress: 'ABScnWTzjcR4dGXzXHW1VR7ecwUXPYxeYNsFcDGfQq4q', ethAddress: '0x5801f43f77b125bed1fecdebdb844044ef10a46b', channel: 'solana' },
  { rank: 28, fid: 306438, username: 'komol0', displayName: 'KoⓂ️ol🎩', castCount: 1, solanaAddress: 'AKC7KHtnWW9AqtbanKfBFvJi8TSnwuQx3UvdZLdXNdjB', ethAddress: '0xc4ce9988708f1f447609b38560e8afcb540b5f56', channel: 'solana' },
  { rank: 29, fid: 308901, username: 'oibelart', displayName: 'Samora Oibel', castCount: 1, solanaAddress: '2QHn1QfzM2aKPKEthY7LcWV7CPrT2amYF6nrRewGhLR7', ethAddress: '0xcfc2729173d1ef8d25050c76b84ec5af1fe7bd44', channel: 'solana' },
  { rank: 30, fid: 326271, username: 'tornado-', displayName: 'Tornado Rodriguez', castCount: 1, solanaAddress: '3G97yqNeFkfJYWTkt37bf8Xj4QmaW36AKVcBaohnarTC', ethAddress: '0x651d699af32cd71b5573571935c99c35f074dd51', channel: 'solana' },
  { rank: 31, fid: 327398, username: 'foreign', displayName: 'foreign', castCount: 1, solanaAddress: '49ibxQ2AiapGwpEEmJHjugbqZ7YJhPLDboiNf7zK5HAR', ethAddress: '0x106d7128040fcfeef222dbba52efda49ebacb4e6', channel: 'solana' },
  { rank: 32, fid: 332457, username: 'lxtxcx', displayName: 'Víctor Arce 🎩', castCount: 1, solanaAddress: 'dCYzh5KXbKYsXHxNt5cr2pMvsMPbuksGnV3LmAYTmyp', ethAddress: '0x1ad68fb015564ef87421009c4fdc1202d3c5d720', channel: 'solana' },
  { rank: 33, fid: 358995, username: 'elya', displayName: 'ELYA', castCount: 1, solanaAddress: '4NB9E3ASK4KS6jmTjoGLh6VPmAHVioD8bG4ALowYRT3E', ethAddress: '0xc9107daed458218f7148420d48ef20295df98654', channel: 'solana' },
  { rank: 34, fid: 382368, username: 'yanlucasmigone', displayName: 'Yan Lucas Migóne', castCount: 1, solanaAddress: 'By1NhasJiTTsKC53WJV1w5kzg2CeUBY1Ps2eVLvvcGZb', ethAddress: '0x9aa5d94e2c1f075025914a9ea1996a4aa87c0d74', channel: 'solana' },
  { rank: 35, fid: 389106, username: 'farshads', displayName: 'FARSHAD 🟦', castCount: 1, solanaAddress: '4wz4hTRcoXJFgpNyij9q6qPGJ6csiuxQJ7GbTKzxoQh2', ethAddress: '0x24ca9423d66595596ea05b2c8a49e94ee79f1fb0', channel: 'solana' },
  { rank: 36, fid: 434598, username: 'moooneth', displayName: 'Mooncult', castCount: 1, solanaAddress: 'Ac3kzQr7JZrtynwHjiV3K29Ex4MD5nyScYWacqGgKZUZ', ethAddress: '0x3fcfe8768917faebf08a2a3920d5c738dda07518', channel: 'solana' },
  { rank: 37, fid: 435708, username: '0xjan', displayName: 'Jan🎭', castCount: 1, solanaAddress: '7PwkrF1j5Hqamwu1okW616ZqSWBuwApL4szz9ksx27o5', ethAddress: '0xafaa15b0e4866d8ddc66dc5d308b280e1ca483d6', channel: 'solana' },
  { rank: 38, fid: 449748, username: 'turjoy85', displayName: 'turjoy.base.eth', castCount: 1, solanaAddress: 'Ax7zikDTd6g6z6h2BKMwuS7pnSM8dVDFdK71U3Ntrt5i', ethAddress: '0xdb67fa906f5c206c77fdace8a44bd61dd6b05d96', channel: 'solana' },
  { rank: 39, fid: 455449, username: 'edercruz', displayName: '✷)', castCount: 1, solanaAddress: '31HJG7GfVDbA2hRdNYgZMbW8caeYzkQaPe2u7Ms1Xxwr', ethAddress: '0xe4a3e9825c4ace2b714e460c10b39d1841adecfe', channel: 'solana' },
  { rank: 40, fid: 474644, username: 'abeg007.eth', displayName: 'abeg007 🧬', castCount: 1, solanaAddress: '8bQx9XgBLuLximYfxoJR322t5eivPBb3mTBfwve7QmJh', ethAddress: '0x3c39f4b90935c4a5c7dc2c8f1ecb6c2065a54f8b', channel: 'solana' },
  { rank: 41, fid: 251181, username: 'fahime', displayName: 'Fahime', castCount: 4, solanaAddress: 'HmVre1UrXkWgbdxUvCraDwSbtS6w9cTuuuPv44WtJgS9', ethAddress: '0x381837b7b0eb014dc0abecd9724e7cd866689d5b', channel: 'degen' },
  { rank: 42, fid: 430082, username: '0xabir', displayName: 'Abir', castCount: 4, solanaAddress: '63xQBMG7MdVaHqxiwJc8D3xw7UmiE4Kbxjr9zro4EQzV', ethAddress: '0x53ddeed4ab88e5d904d16432c096dcbd94753e84', channel: 'degen' },
  { rank: 43, fid: 328663, username: 'edyhoky87', displayName: 'edyhoky87.base.eth 🧬', castCount: 2, solanaAddress: 'HKU8S9n3pMduAbScpUEVATn8YuxCpDphhq8Gi8rpzVtJ', ethAddress: '0xff0fbc0e2ba7e400cbd63c2f16609424e4eb3cdc', channel: 'degen' },
  { rank: 44, fid: 447623, username: '04sveta04', displayName: 'Sveta', castCount: 2, solanaAddress: 'AxrxnHv3UoNaPZSSW1GJbatzBqX4KPuegYJUFhyEyJaZ', ethAddress: '0x741ed5abf3872b500e4bfe90149bfeaa46c33476', channel: 'degen' },
  { rank: 45, fid: 1014689, username: 'fabriziorom', displayName: 'Fabrizio Romano', castCount: 2, solanaAddress: 'FmvmkcVh6QMzGQrYS8jM7JT6jzAAxxWjub8a66SFDpQM', ethAddress: '0x43a08a1b0f8010f585ab88e0309ced622fa5259a', channel: 'degen' },
  { rank: 46, fid: 1098640, username: 'bgs25', displayName: 'bagusgaluh.base.eth', castCount: 2, solanaAddress: 'B9a3cAuMPLoYmeHokZ1eTGHXrbfeUbV7CmA3tM1XTtyH', ethAddress: '0x223720d7ee41393bfaa6292fcb2711916d855ed2', channel: 'degen' },
  { rank: 47, fid: 1548310, username: 'meduse', displayName: 'meduse', castCount: 2, solanaAddress: '', ethAddress: '', channel: 'degen' },
  { rank: 48, fid: 9583, username: 'ptrck', displayName: 'Ptrck🎩', castCount: 1, solanaAddress: '2xXygejEnAZcjVUUT5MgYAKFqkGbMD2i8jPWw9DjiTJW', ethAddress: '0xd85c5377ae75553d1fb84c5ecc48cd10ae7603af', channel: 'degen' },
  { rank: 49, fid: 11548, username: 'mcoso.eth', displayName: 'McOso 🎩🐊', castCount: 1, solanaAddress: 'AiFthVkNYGHQ3w52oNZXiWdsaCZC4S4QozpYicscF2we', ethAddress: '0xd095e0f8c72e22319846b643c4bac0cac1f67006', channel: 'degen' },
  { rank: 50, fid: 12915, username: '0xjudd.eth', displayName: '0xJudd.eth 🎩↑', castCount: 1, solanaAddress: '7TVSueqGhJv67tZy4o4Y8oDqJ3LYbETY3Quj27acSPjM', ethAddress: '0xd43cf02bea3b50a188a2cd7b2a8435a493e7440f', channel: 'degen' },
  { rank: 51, fid: 16111, username: 'arttrick', displayName: 'arttrick🎩🔵', castCount: 1, solanaAddress: '5gMmsvuPUy9aFiWVs8YQ7tAmdSzW5CFaTnGcDMfNGVET', ethAddress: '0x2436979bf51066da9319329e3834d524dab8623b', channel: 'degen' },
  { rank: 52, fid: 191327, username: 'joyboy', displayName: 'Joyboy.Degen🎩', castCount: 1, solanaAddress: 'EP1WGf6Jk8cKnMDnrbJu3PHYGLK65dgn8EQBPr35Nznr', ethAddress: '0x57d97990b4dec94d804e8b03e59cdbf3689253af', channel: 'degen' },
  { rank: 53, fid: 214877, username: 'ttytyverymuch', displayName: 'Tyverymuch', castCount: 1, solanaAddress: '7TSfGXY3hZw9DTSEjXCVMpMdj22rtmYkt92XXUWKCGkG', ethAddress: '0x67fc217f9a1bff43edf72c2dbfee93bc41c14c96', channel: 'degen' },
  { rank: 54, fid: 215784, username: 'petko', displayName: 'Petko Yankov', castCount: 1, solanaAddress: '7EWCt1mXVaP1vpqC6mVwXCPk7eQHMnCDuNt99CRRALAs', ethAddress: '0x7d545f040190fe710f86402ef52d502d00809132', channel: 'degen' },
  { rank: 55, fid: 236953, username: 'sayko', displayName: 'Satrya', castCount: 1, solanaAddress: '84tmHMc9BmjGNiQAf9QZqZhpvczcNgL7cucMB48gwRoq', ethAddress: '0xc1b762a21e0fc6f49a4418c14612a24656b93279', channel: 'degen' },
  { rank: 56, fid: 250257, username: 'solavesh', displayName: 'avesh.eth', castCount: 1, solanaAddress: 'GAjXY3NAogwJjEXj9Y1MTtvX736wS3rTCtjDg9sZPKmY', ethAddress: '0x4fbdb8f70b817b08f38dea137453ebdd2998788e', channel: 'degen' },
  { rank: 57, fid: 255977, username: 'mrrobot', displayName: 'Cihuahuacrypto.eth', castCount: 1, solanaAddress: 'G5PJd7Hh3FZ2zEczJ1VUL3vAXmGc5qjzAueHHx8AjETN', ethAddress: '0xd4b6a10c03183340bec44d0ed3f9cdfda7ecde2e', channel: 'degen' },
  { rank: 58, fid: 258666, username: 'devforlife.eth', displayName: 'devForLife', castCount: 1, solanaAddress: 'HMmd2BartLH328HcuggjcTnbc2tMTqw8iCYMrDjtBiAb', ethAddress: '0x9143408a0eac62d09f0bd9199c07ef6d9ebfbf0d', channel: 'degen' },
  { rank: 59, fid: 259023, username: 'amarsadaqat', displayName: 'Satoshi Nakamoto', castCount: 1, solanaAddress: '4HFLWavxSpzQpffjs2jopLVArh1yQctPx2FzKGx86oJ2', ethAddress: '0x630696ed47ed671fc5824fde109c768a849c5690', channel: 'degen' },
  { rank: 60, fid: 269439, username: 'afraa', displayName: 'afraa.base.eth', castCount: 1, solanaAddress: '2izq2QMZH5EQr5KvnVrRGMAPbTFDprKuaHgBzSPxVfKE', ethAddress: '0x1fa260e5da32265901e5a1868d7aeb033708d467', channel: 'degen' },
  { rank: 61, fid: 272413, username: 'mohamedrafi', displayName: 'Mohamed Rafi', castCount: 1, solanaAddress: '5rcrbf5545cLEwFvXKzrqnsykQAfkhR9xFHTCA9wvhsV', ethAddress: '0xf5aa8794b431b0ef97ebb534cd00460607319208', channel: 'degen' },
  { rank: 62, fid: 279910, username: 'cryptoourgurukul', displayName: '0xiam .base.eth', castCount: 1, solanaAddress: '51K1NhJ46LiE4WuzDGU7EhniKKPV7hEcPKvCiut1BuQV', ethAddress: '0x83ddf6b7ab321a7fcf27e6fb1b6661890f5b30e3', channel: 'degen' },
  { rank: 63, fid: 291844, username: 'vatalik', displayName: 'millim', castCount: 1, solanaAddress: 'AgEo1u5Lg3B5Yp4cKMiSsVJqwpmUesPuSgHETqha939X', ethAddress: '0xfa5fef884b65abdcc5d0ceebecd4f741c8b43cfd', channel: 'degen' },
  { rank: 64, fid: 296354, username: 'matarcaesar', displayName: 'matar caesar base.eth', castCount: 1, solanaAddress: 'ESNFp6PnXHQzpkascrtyKuke6nnCLcwwWvdBMDdjg75X', ethAddress: '0xf4bff4fafce6bb93eaeab4c5eded3ea681250d5e', channel: 'degen' },
  { rank: 65, fid: 304531, username: 'prove', displayName: 'Prove🎩', castCount: 1, solanaAddress: 'GgQTYMNAKa2As8HVLJkPQtSd6VhFts4oGpdfwu71zBwa', ethAddress: '0xaf0ff8140d39e5d69b4dc8b5a291ace840b84841', channel: 'degen' },
  { rank: 66, fid: 310681, username: 'peterchimeziec', displayName: 'Peter chimezie', castCount: 1, solanaAddress: 'EgtheD1q8kfhM1Fi2oBQzFWyQgWPy5myU6h4kRitB9Ue', ethAddress: '0x23ec369b808b0b70888d474a5f5af16323fd80fb', channel: 'degen' },
  { rank: 67, fid: 311485, username: 'dyoungest', displayName: 'AJ🐱👾', castCount: 1, solanaAddress: 'BgRKH1y1B5yy69C8qRew8hMmw8pRs6E16nzzW5hNfBqD', ethAddress: '0x7c79a0c6d83e24b63204c1d0422033db89c632d2', channel: 'degen' },
  { rank: 68, fid: 312375, username: 'lordkeeper.base.eth', displayName: 'Lordkeeper', castCount: 1, solanaAddress: 'DBQYkvVK9bMzX449A5mwgJ2u83D5rdq8UebzsvwUhdRN', ethAddress: '0x2a8947bc9f6ecb87c255c8b2932276f8aee5cf92', channel: 'degen' },
  { rank: 69, fid: 316882, username: 'lystenlyst', displayName: 'Lystenlysts', castCount: 1, solanaAddress: '8ap34QDjQ7zzaTd3ChZxydUQf922ENAvfy6CRG7aBjWG', ethAddress: '0xa1beaa6d002a332c11b01633345fda9865f5a53a', channel: 'degen' },
  { rank: 70, fid: 322621, username: 'mijan444', displayName: 'Mizanur Rahman', castCount: 1, solanaAddress: '7w7NNXCMWv57UCoVKpAraGPC8pYE7eb6P9QcJiHSH8YT', ethAddress: '0x687c5fb45841a8defdc43035517da8ef5b1a1e09', channel: 'degen' },
  { rank: 71, fid: 327336, username: 'lulolezz', displayName: 'Lulolezz 🎩', castCount: 1, solanaAddress: 'FJjKiSDr25m7aqgHqfMvzJjGqK5BgH29xBUymDtjokFJ', ethAddress: '0x3e5f7a4f4b1a33d23c272b3548afc3c43a0f49b9', channel: 'degen' },
  { rank: 72, fid: 328391, username: 'halee', displayName: 'Halee', castCount: 1, solanaAddress: '2Wh6bu3wpqXgg4zGHeee4JhjJmgdaLqrXZxdw8rop8KS', ethAddress: '0x95ae60ca12bc32a4a77d19545dd9702c049ccece', channel: 'degen' },
  { rank: 73, fid: 330947, username: 'skyzo', displayName: 'Skyzo', castCount: 1, solanaAddress: 'EjyyrgF8Fea5oU327hPXGaR1tCXuYbDCwg1aG5p2SuGx', ethAddress: '0xb903f3b01e14a140b53b8c8034656a9aa410b8f6', channel: 'degen' },
  { rank: 74, fid: 337036, username: 'jeann', displayName: 'Jean', castCount: 1, solanaAddress: 'FN1VzRvwQQp5gBMdEr5VFehpMexThZjAc9D6DXDansrB', ethAddress: '0xbc912d3aba35ccb2c6c7ac0d445b9f3e866adb41', channel: 'degen' },
  { rank: 75, fid: 349002, username: 'picks0', displayName: 'picks', castCount: 1, solanaAddress: '3FJMdJYhMXZXkFN74XqH3ERW28EAMxyXZLeQTt51RiNR', ethAddress: '0x3c64ef2b34073f927cf4047f0bbf5295209bf301', channel: 'degen' },
  { rank: 76, fid: 350139, username: 'joshisdead.eth', displayName: 'joshisdead.eth', castCount: 1, solanaAddress: 'EE1wsFhCcseYyyNp7W7qef3tr2QhZKnwwKcuVCHC3j3B', ethAddress: '0x2e5e9c6358c201c4546b971c2b41882585e270df', channel: 'degen' },
  { rank: 77, fid: 361741, username: 'plabon', displayName: 'Plabon', castCount: 1, solanaAddress: '3vuXUn7K6GtxSV2XEkuRfHtKi4Vjvcx4YFUNaPsGFSK9', ethAddress: '0x15ff90c6a5dfdc579c2f3581006c863a71e6f0fb', channel: 'degen' },
  { rank: 78, fid: 363508, username: 'luckynguyen', displayName: 'Lucynguyen', castCount: 1, solanaAddress: 'CMvnJXMMf6PZqdgVpM8nNgx7c1hC8GWigtEecgXck1GU', ethAddress: '0x9568170e6e55fec7ab71b9a738f061c79b91588c', channel: 'degen' },
  { rank: 79, fid: 375536, username: 'jdotfinn', displayName: 'J Finn 🎩', castCount: 1, solanaAddress: '9bPV6TgfVNueHmCBv8Vp1sQQ8FK1MZueUpvMzYJ1cK7U', ethAddress: '0xb642b7b23c84ddc446dc364b1f714cee6bfd0908', channel: 'degen' },
  { rank: 80, fid: 376158, username: 'bijoyraj', displayName: 'Deb Raj', castCount: 1, solanaAddress: 'GRXDA9rSRaRGBVPiVuZSxGpPgfWsRPf4r8gAfmJ3ew9Q', ethAddress: '0x6ed76ddd2718d23b5c7d631f0cc2a207bed589b3', channel: 'degen' },
];

export const PARTICIPANTS_SUMMARY = {
  total: TOP_80_PARTICIPANTS.length,
  solanaCount: TOP_80_PARTICIPANTS.filter(p => p.channel === 'solana').length,
  degenCount: TOP_80_PARTICIPANTS.filter(p => p.channel === 'degen').length,
  withSolanaAddress: TOP_80_PARTICIPANTS.filter(p => p.solanaAddress).length,
};
