/**
 * Represents the symmetric difference operation, which is the given set of
 * two sets A and B that contain elements from either set, but not their intersection
 * It is usually known either as `A △ B`, `A ⊖ B`, or `A ⊕ B`.
 *  - **Formal definitions**:
 * 	 - `A △ B = (A \ B) ∪ (B \ A)`: Union of the complements of both sets
 * 	 - `A △ B = {x: (X ∈ A) ⊕ (X ∈ B)}`: Set-builder notation with XOR operation and predicates
 * 	 - `A △ B = (A ∪ B) \ (B ∪ A)`: Difference of the unions of both sets
 *  - **Time complexity**:
 * @example
 * ```
 * // {1, 2, 3, 4, 5} △ {2, 4, 6} = {1, 3, 5, 6}
 * getSymmetricDifference(new Set([1, 2, 3, 4, 5]), new Set([2, 4, 6]); // new Set([1, 3, 5, 6])
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<B>` elements
 * @returns The symmetric difference, `A △ B`
 */
export default function getSymmetricDifference<TElement>(a: Set<TElement>, b: Set<TElement>): Set<TElement>;
