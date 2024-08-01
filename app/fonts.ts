
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
    weight:["400","500","700"],
    subsets:["latin"],
    variable:'--font-ubuntu'
})

export const fonts = {
    ubuntu,
  }