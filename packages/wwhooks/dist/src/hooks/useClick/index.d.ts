export interface Config {
    delay?: number;
    exclusive?: boolean;
}
declare const useClick: (simpleClickFn?: (e: React.MouseEvent) => void, doubleClickFn?: (e: React.MouseEvent) => void, config?: Config) => (e: React.MouseEvent) => void;
export default useClick;
