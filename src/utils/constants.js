export const API_URL = process.env.REACT_APP_API_URL;

export const OPTIONS = [
  { text: "multiplicar", value: "multiplies" },
  { text: "dividir", value: "divides" }
];

export const EMPTY_INPUT_VALUE_ERROR = "Tiene que ingresar un valor válido";
export const EMPTY_SELECT_VALUE_ERROR = "Tiene que seleccionar una opción";
export const INVALID_ZERO_VALUE =
  "tiene que ingresar un valor distinto de cero";

export const TRANSLATIONS = {
  "The value isn't a number": EMPTY_INPUT_VALUE_ERROR,
  "Second number must not be zero": INVALID_ZERO_VALUE
};
