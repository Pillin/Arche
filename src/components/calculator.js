import React from "react";
import { string, func } from "prop-types";
import { OPTIONS } from "../utils/constants";
import { validateNumber } from "../utils/validations";
import Select from "./utils/select";
import Input from "./utils/input";
import Title from "./utils/title";
import Button from "./utils/button";

const calculator = props => {
  const { firstValue, secondValue, result, operation } = props;
  const {
    changeFirstValue,
    changeSecondValue,
    changeOperation,
    calculate
  } = props;
  return (
    <section>
      <Input
        label="Num1"
        value={firstValue}
        onChange={changeFirstValue}
        validate={validateNumber}
      />
      <Input
        label="Num2"
        value={secondValue}
        onChange={changeSecondValue}
        validate={validateNumber}
      />
      <Select
        label="Operación"
        selected={operation}
        options={OPTIONS}
        onSelect={changeOperation}
      />
      <Button label="Calcular" onClick={calculate} />
      <Title label="Resultado" />
      <Input label="Resultado" value={result} disabled />
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
  calculate: func.isRequired
};

export default calculator;
