export const isFloat = (arg) => {
	if (typeof arg !== 'string') return false;

	let letter, hasDecimalSeparator = false;

	for (let i = 0; i < arg.length; i++) {
		letter = arg.charAt(i);
		if (i == 0 && letter == '-') continue; // Can start with a minus sign.
		if (letter == '.') {
			if (hasDecimalSeparator) return false; // Cannot have more than one decimal separator.
			if (i == arg.length - 1) return false; // Cannot end with a decimal separator.
			hasDecimalSeparator = true;
			continue;
		}
		if ('0123456789'.includes(letter)) continue;
		return false;
	}

	let firstLetter = arg.charAt(0);
	let secondLetter = arg.charAt(1);
	let thirdLetter = arg.charAt(2);

	// Cannot have right padded zeros.
	if (firstLetter === '0' && secondLetter === '0') return false;
	if (firstLetter === '-' && secondLetter === '0' && thirdLetter === '0') return false;

	if (firstLetter === '-' && secondLetter === '.') return false; // It must have a number after minus sign.
	if (firstLetter === '-' && secondLetter === '0' && thirdLetter === '') return false; // It cannot be `-0`.
	return true;
};

export const floatToNumber = (floatStr, mantissaLength) => Number(Number(parseFloat(floatStr)).toFixed(mantissaLength));

export const coerceToFloat = (arg) => {
	let value = arg;
	if (isFloat(value)) return value;
	if (arg !== null && typeof arg === 'object' && typeof arg.valueOf === 'function') value = arg.valueOf();
	if (typeof value === 'bigint') return value.toString();
	if (typeof value === 'number' && !isNaN(value) && Number.isFinite(value)) return value.toString();
	throw new Error('Cannot coerce');
};
