import { BasicTarget } from '../../common/interface';
export declare const useClickAway: <T extends Event = Event>(
  target: BasicTarget,
  onClickAway: (event: T) => void,
  events?: string[],
) => void;
export default useClickAway;
