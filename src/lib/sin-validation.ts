const SIN_LEN = 9
function getCleanedNumber (input: string | number) : string {
	return input.toString().trim().split(/\s+/).join('')
}

export function getSINError (input: string | number) : null | string {
	// Remove all whitespace
	const cleaned = getCleanedNumber(input)

	if (cleaned.match(/\D/)) {
		return 'Only numbers are allowed'
	}

	if (cleaned.length !== SIN_LEN) {
		return `Must be ${SIN_LEN} digits long`
	}

	if (!isValidLuhnNumber(cleaned)) {
		return 'Not a valid SIN'
	}

	return null
}

export function isValidLuhnNumber (input: string) : boolean {
	const sum = getLuhnSum(input)
	return sum % 10 === 0
}

/**
 * Get the Luhn sum of a string of digits
 * Input is a string to allow for leading zeros
 * @param input
 */
export function getLuhnSum (input: string) : number {
	const cleaned = getCleanedNumber(input)
	const digits = cleaned.split('').map(Number)
	const sum = digits.reduce((total, digit, idx) => {
		if (idx % 2 === 0) {
			return total + digit
		}

		const dbl = digit * 2
		if (dbl > 9) {
			const added = dbl - 9
			return total + added
		}
		return total + dbl
	}, 0)

	return sum
}
