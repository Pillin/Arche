import { connect } from "react-redux";
import Calculator from "./calculator";
import {
  changeFirstValue,
  changeSecondValue,
  changeOperation,
  calculate
} from "../store/actions";

const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeFirstValue: value => dispatch(changeFirstValue(value)),
    changeSecondValue: value => dispatch(changeSecondValue(value)),
    changeOperation: value => dispatch(changeOperation(value)),
    calculate: value => calculate(value)(dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
