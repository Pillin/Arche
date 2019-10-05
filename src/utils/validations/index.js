export const numbersAndDotsRegex = /[^0-9.]/;

export const validateNumber = value => value.replace(numbersAndDotsRegex, "");
