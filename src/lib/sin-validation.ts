const SIN_LEN = 9
function removeWhiteSpace (input: string | number) : string {
	return input.toString().trim().split(/\s+/).join('')
}

/**
 * Get an error message if the input is not a valid SIN
 * If it returns null, then there is no error and it is valid
 * @param input
 */
export function getSINError (input: string | number) : null | string {
	// Remove all whitespace
	const cleaned = removeWhiteSpace(input)

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

/**
 * A number is a valid Luhn number if the sum of all the digits is divisible by 10
 */
export function isValidLuhnNumber (input: string) : boolean {
	const sum = getLuhnSum(input)
	return sum % 10 === 0
}

/**
 * Get the Luhn sum of a string of digits
 * Input is a string to allow for leading zeros
 * About the algorithm: https://en.wikipedia.org/wiki/Luhn_algorithm
 * The sum is the total of all the digits, but every second digit is doubled. If doubling
 * ends up more than 9, you add the two digits together (7 * 2 = 14 = (1+5) = 5). This is the same
 * as subtracting 9 from the doubled digit.
 */
export function getLuhnSum (input: string) : number {
	const cleaned = removeWhiteSpace(input)
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

/**
 * This is used to format the SIN for use in both display, and in the textbox
 * that the user is typing into
 * If you type "123 " it should stay as "123 " so we don't remove spaces as you're
 * typing them
 * If you type " 123123" it should become "123 123" because grouping by 3s is easier
 * for people to read. We remove leading spaces because it's more likely those a mistake
 * on the user's part
 */
export function formatInputGrouped (input: string | number) : string {
	if (!input) {
		return ''
	}
	input = input.toString()
	const lastChar = input[input.length - 1]

	// Get just the non-whitespace characters to work with
	const chars = removeWhiteSpace(input)
	const groups = chars.match(/.{1,3}/g)
	if (!groups) {
		return chars
	}

	const grouped = groups.join(' ')

	// A space at the end is the only whitespace that we want to keep
	if (lastChar === " ") {
		return grouped + ' '
	}

	return grouped
}
