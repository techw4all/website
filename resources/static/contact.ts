export type ContactWay = string | null;


export const emailAddress: ContactWay = 'contato.br@w4io.com';
export const phoneNumber: (() => ContactWay) = () => process.env.NEXT_PUBLIC_CONTACT_PHONE || null;
