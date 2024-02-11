import localFont from "next/font/local";

export const Aeonik = localFont({
  src: [
    {
      path: "../public/fonts/Aeonik-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Aeonik-Regular.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/Aeonik-Light.otf",
      weight: "300",
      style: "normal",
    }
  ],
  variable: "--font-aeonik",
})