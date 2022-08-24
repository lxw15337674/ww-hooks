declare function useIntervalFn(fn: () => void, delay: number): {
    start: () => void;
    clear: () => void;
    looping: any;
};
export default useIntervalFn;
