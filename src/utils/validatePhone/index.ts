export const validatePhone = (phone: string): boolean => {
  const phonePattern = /^(?:\+7|7|8)\d{10}$/;
  return phonePattern.test(phone);
};
