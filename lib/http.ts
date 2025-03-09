import { powerfetch } from 'typesdk/http';
import { Transporter } from 'ndforge/transporters/core';


if(!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}


export const api = powerfetch.create(process.env.NEXT_PUBLIC_API_URL, {
  credentials: 'include',
});


export const transporter = createTransporter();


function createTransporter(): Transporter {
  if(!process.env.NEXT_PUBLIC_T_ENC_KEY || !process.env.NEXT_PUBLIC_T_SIG_KEY) {
    throw new Error('Either NEXT_PUBLIC_T_ENC_KEY or NEXT_PUBLIC_T_SIG_KEY is not defined');
  }

  const enc = Buffer.from(process.env.NEXT_PUBLIC_T_ENC_KEY);
  const sig = Buffer.from(process.env.NEXT_PUBLIC_T_SIG_KEY);

  return new Transporter(enc, sig);
}
