type RationalNumber = string

export const rationalNumberToFloat = (rationalNumber: RationalNumber, mantissaLength: number): number => {
	return Number(Number(parseFloat(rationalNumber)).toFixed(mantissaLength))
}
