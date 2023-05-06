export const rationalToNumber = (rational, mantissaLength) => {
    return Number(Number(parseFloat(rational)).toFixed(mantissaLength));
};
