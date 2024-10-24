import {test, expect} from "vitest";
import {getSINError, getLuhnSum, isValidLuhnNumber, formatInputGrouped} from "./sin-validation.ts";

test('luhn sum', () => {
	expect(getLuhnSum('121 212 121')).toEqual(21)
	expect(isValidLuhnNumber('121 212 121')).toBe(false)
	expect(isValidLuhnNumber('  685 031 197 ')).toBe(true)
	expect(getLuhnSum('046454286')).toEqual(50)
	expect(getLuhnSum('0 4 6 4 5 4 2 8 6')).toEqual(50)
	expect(getLuhnSum('0 4 6 4 5 4 2 8 8')).toEqual(52)
})


test('errors', () => {
	expect(getSINError('one')).toBe('Only numbers are allowed')
	expect(getSINError('12345678')).toBe('Must be 9 digits long')
	expect(getSINError('     ')).toBe('Must be 9 digits long')
	expect(getSINError('1234567890')).toBe('Must be 9 digits long')
	expect(getSINError('121 212 121')).toBe('Not a valid SIN')
})

test('valid', () => {
	expect(getSINError('685 031 197')).toBe(null)
	expect(getSINError(685031197)).toBe(null)
	expect(getSINError(`
	685 031 197
	
`)).toBe(null)
	expect(getSINError('0 4 6 4 5 4 2 8 6')).toBe(null)
})

test('formatter', () => {
	expect(formatInputGrouped('123     ABC 3f6      ')).toEqual('123 ABC 3f6 ')
	expect(formatInputGrouped('123 ')).toEqual('123 ')
	expect(formatInputGrouped(' 123123')).toEqual('123 123')
	expect(formatInputGrouped('             ')).toEqual('')
	expect(formatInputGrouped('             1')).toEqual('1')
	expect(formatInputGrouped(`
	
587583436

`)).toEqual('587 583 436')
	expect(formatInputGrouped(685031197)).toEqual('685 031 197')
})
