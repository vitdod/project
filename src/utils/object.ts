type Entries<T> = {
    [K in keyof T]: [K, T[K]]
  }[keyof T][]
  
  export const getEntries = <O extends Record<string, any>>(o: O) => Object.entries(o) as Entries<O>
  export const findKeyByValue =
    <T extends Record<any, any>>(base: T) =>
    (match: any) =>
      getEntries(base).find(([_key, value]) => value === match)?.[0]
  
  type AllKeys<T> = T extends unknown ? keyof T : never
  type Id<T> = T extends infer U ? { [K in keyof U]: U[K] } : never
  type ExclusifyUnion<T, K extends PropertyKey> = T extends unknown
    ? Id<T & Partial<Record<Exclude<K, keyof T>, never>>>
    : never
  export type MissingKeysAsUndefined<T> = ExclusifyUnion<T, AllKeys<T>>
  
  /** Convert `interface` to a `type`
   * Useful when getting errors like `Index signature for type 'string' is missing in type 'MyInterfaceType'`, which is caused due to that `interface` can be re-opened
   * Other methods is `Object.freeze(value)` to make it Readonly. You can also spread, but that impacts performace.
   *
   * @see https://github.com/microsoft/TypeScript/issues/15300
   */
  
  export type InterfaceRecord<T> = Record<string | symbol | number, any> & {
    [K in keyof T]: T[K]
  }
  type AnyKey = string | symbol | number
  export const ensureEntries = <O extends Record<any, any>, E extends [AnyKey][]>(v: O | E): E | Entries<O> =>
    Array.isArray(v) ? v : getEntries(v)
  
  export const isPlainObject = (value: any): value is Record<any, any> =>
    typeof value === 'object' && value !== null && value.constructor === Object
  
  /** General purpose type safe property getter
   * - Support unknown keys
   * - Key can be either first or last argument
   **/
  type ValueOf = {
    <Key extends string>(key: Key): <Obj extends Record<Key, unknown>>(obj: Obj) => Obj[Key]
    <Obj extends Record<string, any>>(obj: Obj): <Key extends keyof Obj>(
      key: Key | string,
    ) => Obj[Key] | undefined
  }
  export const valueOf: ValueOf = (first: any) => (second: any) =>
    typeof first === 'string' ? second[first] : first[second]
  