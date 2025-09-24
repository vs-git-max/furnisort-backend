export const isEmailValid = (email) => {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
    String(email).toLowerCase()
  );
};
