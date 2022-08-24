import { Options } from './interface';
declare const _default: <T = any>(originalList: T[], { containerRef, itemHeight, overscan }: Options<T>) => {
    list: any;
    wrapperStyle: {
        marginTop: any;
        height: any;
    };
    scrollTo: (index: number) => void;
};
export default _default;
