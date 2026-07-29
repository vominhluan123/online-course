import crypto from "crypto";

export const createOrderCode = () => {
  return `DH-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
};
