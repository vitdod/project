export type Falsy = false | '' | 0 | null | undefined

export type Truthy<T> = T extends Falsy ? never : T

/** Type safe Boolean */
export function isTruthy<T>(value: T): value is Truthy<T> {
  return !!value
}

/** Type safe assertion */
export function assert(condition: boolean, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message || 'Expected condition is false')
  }
}

/** Check if array contains given value.
 * - Acts as a type guard so the type can be inferred
 * - Escapes the native type checks native which can be too narrow
 **/
export const includes =
  <Items, Item extends Items>(items: readonly Item[]) =>
  (item: Items): item is Item =>
    items.includes(item as any)

/** Check if value is null or undefined */
export const isValue = <T>(value: T | null | undefined): value is T => value != null

export type Empty = undefined | null | '' | []
/** Check if value is missing or if it's an empty string/array */
export const isEmpty = (input: Empty | string | unknown[]): input is Empty =>
  !isValue(input) || input.length === 0

/**
 * Check if the passed in string a Date
 */
export const isDate = (date: string) =>
  new Date(date) !== new Date('Invalid Date') && !isNaN(new Date(date) as unknown as number)
