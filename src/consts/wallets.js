export const OYL = 'oyl';
export const UNISAT = 'unisat';
export const XVERSE = 'xverse';
export const PHANTOM = 'phantom';
export const LEATHER = 'leather';
export const XVERSE_NETWORK = 'Mainnet';
export const UNISAT_MAINNET = 'livenet';
export const UNISAT_TESTNET = 'testnet';
export const XVERSE_MAINNET = 'Mainnet';
export const XVERSE_TESTNET = 'Testnet';
export const LEATHER_MAINNET = 'mainnet';
export const LEATHER_TESTNET = 'testnet';
export const MAINNET = 'mainnet';
export const TESTNET = 'testnet';
export const getXverseNetwork = (network) => {
    if (network === MAINNET)
        return XVERSE_MAINNET;
    if (network === TESTNET)
        return XVERSE_TESTNET;
    return XVERSE_MAINNET;
};
export const getLeatherNetwork = (network) => {
    if (network === MAINNET)
        return LEATHER_MAINNET;
    if (network === TESTNET)
        return LEATHER_TESTNET;
    return LEATHER_MAINNET;
};
export const getUnisatNetwork = (network) => {
    if (network === MAINNET)
        return UNISAT_MAINNET;
    if (network === TESTNET)
        return UNISAT_TESTNET;
    return UNISAT_MAINNET;
};
export const getNetworkForUnisat = (network) => {
    if (network === UNISAT_MAINNET)
        return MAINNET;
    if (network === UNISAT_TESTNET)
        return TESTNET;
    return MAINNET;
};
export const getNetworkForXverse = (network) => {
    if (network === XVERSE_MAINNET)
        return MAINNET;
    if (network === XVERSE_TESTNET)
        return TESTNET;
    return MAINNET;
};
export const getNetworkForLeather = (network) => {
    if (network === LEATHER_MAINNET)
        return MAINNET;
    if (network === LEATHER_TESTNET)
        return TESTNET;
    return MAINNET;
};
export const P2TR = 'p2tr';
export const P2PKH = 'p2pkh';
export const P2WPKH = 'p2wpkh';
export const P2WSH = 'p2wsh';
export const P2SH = 'p2sh';
export const WALLETS = {
    oyl: {
        name: OYL,
        icon: 'data:image/svg+xml,%3Csvg%20width%3D%2296%22%20height%3D%2216%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M17.27.318c2.947%200%205.72.26%208.32.78%202.6.507%204.714%201.307%206.34%202.4%201.64%201.094%202.46%202.467%202.46%204.12%200%201.654-.82%203.047-2.46%204.18-1.64%201.12-3.766%201.954-6.38%202.5-2.6.547-5.36.82-8.28.82-2.946%200-5.72-.253-8.32-.76-2.6-.52-4.72-1.326-6.36-2.42C.964%2010.845.15%209.472.15%207.818c0-1.653.82-3.04%202.46-4.16%201.64-1.133%203.76-1.973%206.36-2.52%202.614-.546%205.38-.82%208.3-.82Zm.04%2011.96c1.4%200%202.8-.146%204.2-.44%201.414-.293%202.6-.78%203.56-1.46.96-.68%201.44-1.566%201.44-2.66%200-1.093-.48-1.98-1.44-2.66-.96-.68-2.146-1.166-3.56-1.46-1.4-.293-2.8-.44-4.2-.44h-.08c-1.4%200-2.806.147-4.22.44-1.4.294-2.58.78-3.54%201.46-.96.68-1.44%201.567-1.44%202.66%200%201.094.48%201.98%201.44%202.66.96.68%202.14%201.167%203.54%201.46%201.414.294%202.82.44%204.22.44h.08ZM61.293.758c.08-.026.14-.04.18-.04h8.24c.12%200%20.214.04.28.12.08.08.12.174.12.28%200%20.147-.066.26-.2.34l-14%207.7c-.133.067-.2.18-.2.34v4.82c0%20.107-.04.2-.12.28a.384.384%200%200%201-.28.12h-6.94c-.106%200-.2-.04-.28-.12a.384.384%200%200%201-.12-.28v-4.82c0-.16-.066-.273-.2-.34l-13.98-7.7a.376.376%200%200%201-.2-.34c0-.106.034-.2.1-.28.067-.08.16-.12.28-.12h8.24c.054%200%20.12.014.2.04l9.24%205.1c.08.027.147.04.2.04.04%200%20.1-.013.18-.04l9.26-5.1Zm11.232.36c0-.106.033-.2.1-.28.08-.08.173-.12.28-.12h6.84c.106%200%20.193.04.26.12.08.08.12.174.12.28v10.32c0%20.107.04.2.12.28.08.08.173.12.28.12h14.46c.106%200%20.193.04.26.12.08.08.12.174.12.28v2.08c0%20.107-.04.2-.12.28a.322.322%200%200%201-.26.12h-22.08c-.107%200-.2-.04-.28-.12a.424.424%200%200%201-.1-.28v-13.2Z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E',
        site: 'https://oyl.io/',
        disabled: false,
    },
    unisat: {
        name: UNISAT,
        icon: '/wallet-logos/unisat_logo.png',
        site: 'https://unisat.io/',
        disabled: false,
    },
    xverse: {
        name: XVERSE,
        icon: '/wallet-logos/xverse_logo.png',
        site: 'https://www.xverse.app/',
        config: () => { },
        disabled: false,
    },
    leather: {
        name: LEATHER,
        icon: '/wallet-logos/leather_logo.png',
        site: 'https://leather.io/',
        config: () => { },
        disabled: true,
    },
};