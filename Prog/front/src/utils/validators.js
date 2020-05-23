export const requiredField = value => {
  if (!value) {
    return "Field is required";
  }
  return undefined;
};


export const maxLength = (maxLength) => (value) => {
  if (value.length > maxLength) {
    return "Max length is 30 symbols";
  }
  return undefined;
};