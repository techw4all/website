export type ContactWay = string | null;


export const instagram: ContactWay = null;
export const emailAddress: ContactWay = 'contato.br@w4io.com';
export const linkedin: (() => ContactWay) = () => process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_NAME || null;
export const phoneNumber: (() => ContactWay) = () => process.env.NEXT_PUBLIC_CONTACT_PHONE || null;
