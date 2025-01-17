import {Arrow} from './Arrow'

/** Extract parameters from a **`Function`**
 * @param F to extract from
 * @returns **`any[]`**
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * const fn = (name: string, age: number) => {}
 *
 * type test0 = F.ParamsOf<typeof fn>                         // [string, number]
 *
 * type test1 = F.ParamsOf<(name: string, age: number) => {}> // [string, number]
 * ```
 */
export type ParamsOf<F extends Arrow> =
    F extends ((...args: infer T) => any)
    ? T
    : never
