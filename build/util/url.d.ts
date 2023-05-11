declare function setParams(url: string | undefined, params: object): string;
declare function delParams(url: string | undefined, key: string): string;
declare function replaceDomain(url?: string, domain?: string): string;
declare const _default: {
    setParams: typeof setParams;
    delParams: typeof delParams;
    replaceDomain: typeof replaceDomain;
};
export default _default;
