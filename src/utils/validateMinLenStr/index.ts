export const validateMinLenStr = (str: string, minLen: number): boolean => {
  return str.trim().length >= minLen;
};
