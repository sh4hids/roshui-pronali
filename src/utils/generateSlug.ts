export const generateSlug = (text: string) =>
  text
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
