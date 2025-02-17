export declare function range(size: number, startAt?: number): number[];
export declare function findPositionInArray<T>(this: T[], el: T, compareFn: (el: T, el2: T) => number): number;
export declare function pushSorted<T>(arr: T[], el: T, fn: (el: T, el2: T) => number): T[];
export declare function mergeSortedArray<T>(arr1: T[], arr2: T[], compareFn?: (el: T, el2: T) => boolean): T[];
export declare function getScrollbarWidth(doc: Document): number;
export declare function scaleValue(value: number, from: [number, number], to: [number, number]): number;
export declare function timeout(delay?: number): Promise<void>;
export declare function applyMixins(derivedCtor: any, constructors: any[]): void;
