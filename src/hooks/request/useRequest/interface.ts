export interface Result<P, D, R> {
  data: R;
  error: string;
  loading: boolean;
  run: () => Promise<R>;
  mutate: React.Dispatch<React.SetStateAction<R>>;
}

export interface DebounceOptions<P, D> {
  wait?: number;
  leading?: boolean;
  maxWait?: number;
  trailing?: boolean;
}

export interface Params<D> {
  /**
   * @desc: 是否手动
   */
  manual?: boolean;
  onSuccess?: (result: D) => void;
  onError?: (result: string) => void;
  initialData?: D;
}
