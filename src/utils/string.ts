export type StringAfter<
  Input extends string,
  Delimiter extends string,
> = Input extends `${string}${Delimiter}${infer Tail}` ? Tail : ''

export type WithoutPrefix<
  Original extends string,
  Prefix extends string,
> = Original extends `${Prefix}${infer Rest}` ? Rest : Original

export type Maybe<In> = In extends string ? In | '' : In extends number ? In | 0 : never

export const capitalizeFirst = (input: string) => input.charAt(0).toUpperCase() + input.slice(1)

export const lowercase = <Input extends string>(input: Input) => input.toLowerCase() as Lowercase<Input>

/** Get string after first occurrence of a character */
export const stringAfter = <Input extends string, Delimiter extends string>(
  input: Input,
  character: Delimiter,
) => {
  const index = input.indexOf(character)
  return (index < 0 ? '' : input.substring(index + character.length)) as StringAfter<Input, Delimiter>
}

export const splitAtFirst = <Input extends string, Delimiter extends string>(
  input: Input,
  delimiter: Delimiter,
): Input extends `${infer First}${Delimiter}${infer Second}`
  ? [First, Second]
  : Input extends `${infer First}${Delimiter | ``}`
  ? [First, '']
  : [`${Input}`, ''] => {
  const index = input.indexOf(delimiter)
  return index < 0 ? [input, ''] : ([input.slice(0, index), input.slice(index + 1)] as any)
}

export const getInitials = (name?: string | null) => {
  if (!name) return ''
  const split = name.trim().split(' ')

  const firstPart = split[0] ?? ''
  let secondPart = split[0][1] ?? ''

  if (split.length > 1) {
    secondPart = split[split.length - 1] ?? ''
  }

  // fromCodePoint/codePointAt is used to support all unicode characters.
  const firstChar = firstPart.codePointAt(0) ? String.fromCodePoint(firstPart.codePointAt(0) ?? 1) : ''
  const secondChar = secondPart.codePointAt(0) ? String.fromCodePoint(secondPart.codePointAt(0) ?? 1) : ''

  return `${firstChar}${secondChar}`.toUpperCase()
}
