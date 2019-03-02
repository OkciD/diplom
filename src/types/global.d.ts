declare type SelectFn<StoreType> = (store: StoreType) => any;
type valueof<T> = T[keyof T];
