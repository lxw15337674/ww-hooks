declare type Fn = (...args: any[]) => any;
declare function setDefaultArguments<F extends Fn = Fn, P extends any[] = Parameters<F>>(fn: F, ...defaultArguments: Parameters<F>): (...args: P) => ReturnType<F>;
export default setDefaultArguments;
