import React from "react";
import { string, func, shape } from "prop-types";
import { OPTIONS } from "../utils/constants";
import { validateNumber } from "../utils/validations";
import Select from "./utils/select";
import Input from "./utils/input";
import Title from "./utils/title";
import Button from "./utils/button";

const calculator = props => {
  const { firstValue, secondValue, result, operation, errors } = props;
  const {
    changeFirstValue,
    changeSecondValue,
    changeOperation,
    calculate
  } = props;

  return (
    <section>
      <Input
        placeholder="Num1"
        value={firstValue}
        onChange={changeFirstValue}
        validate={validateNumber}
        classes={errors.firstValue ? "error" : ""}
      />
      <Input
        placeholder="Num2"
        value={secondValue}
        onChange={changeSecondValue}
        validate={validateNumber}
        classes={errors.secondValue ? "error" : ""}
      />
      <Select
        placeholder="Operación"
        selected={operation}
        options={OPTIONS}
        onSelect={changeOperation}
        classes={errors.operation ? "error" : ""}
      />
      <Button
        label="Calcular"
        onClick={() => calculate({ firstValue, secondValue, operation })}
      />
      <Title label="Resultado" />
      <Input placeholder="Resultado" value={result} disabled />
    </section>
  );
};

calculator.propTypes = {
  firstValue: string.isRequired,
  secondValue: string.isRequired,
  result: string.isRequired,
  operation: string.isRequired,
  changeFirstValue: func.isRequired,
  changeSecondValue: func.isRequired,
  changeOperation: func.isRequired,
  calculate: func.isRequired,
  errors: shape({
    firstValue: string,
    secondValue: string,
    operation: string
  }).isRequired
};

export default calculator;
