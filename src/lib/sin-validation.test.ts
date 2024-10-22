import {test, expect} from "vitest";
import {getSINError, getLuhnSum, isValidLuhnNumber} from "./sin-validation.ts";

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
	expect(getSINError('0 4 6 4 5 4 2 8 6')).toBe(null)
})
