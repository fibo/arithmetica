export const rationalNumberToFloat = (rationalNumber, mantissaLength) => {
    return Number(Number(parseFloat(rationalNumber)).toFixed(mantissaLength));
};
