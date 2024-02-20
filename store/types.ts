export type AnyStoreAction<TType> = AnyAction<TType>;

export type AnyAction<TType, TPayload = any> = {
  type: TType;
  payload: TPayload;
};
