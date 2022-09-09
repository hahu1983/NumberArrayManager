declare type NumArr = {
    name: string;
    arr: number[];
};
export default class NumberArrayManager {
    arrs: NumArr[];
    add(name: string | string[], ids: number[]): void;
    addName(name: string): void;
    hasName(name: string): boolean;
    private getName;
    delete(name: string): void;
    remove(name: string, ids: number[]): void;
    reset(name: string): void;
    has(name: string, id: number): boolean;
    some(name: string, ids: number[]): boolean;
    every(name: string, ids: number[]): boolean;
    list(name: string): number[];
    showAll(): NumArr[];
}
export {};
