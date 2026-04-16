import { Manrope, Roboto } from "next/font/google";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});
export { Manrope, Roboto };
