import bcrypt from "bcryptjs";

export const hashPassword = async (password, salt = 12) => {
  return await bcrypt.hash(password, salt);
};

export const checkPassword = async (inputPassword, currentPassword) => {
  return await bcrypt.compare(inputPassword, currentPassword);
};
