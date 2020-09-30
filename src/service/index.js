function calculate(setGroupNumber1, groupNumber1, operators, groupNumber2) {
  switch (operators) {
    case "+":
      setGroupNumber1(parseInt(groupNumber2) + parseInt(groupNumber1));
      break;
    case "-":
      setGroupNumber1(parseInt(groupNumber2) - parseInt(groupNumber1));
      break;
    case "*":
      setGroupNumber1(parseInt(groupNumber2) * parseInt(groupNumber1));
      break;
    default:
      setGroupNumber1(parseInt(groupNumber2) / parseInt(groupNumber1));
      break;
  }
  return setGroupNumber1;
}
export default calculate;
