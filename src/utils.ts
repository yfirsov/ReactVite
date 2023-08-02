const getPadTime = (quantity: number) => quantity.toString().padStart(2, '0');
export const getHours = (time: Date) => time.getHours();
export const getMinutes = (time: Date) => time.getMinutes();
export const getSeconds = (time: Date) => time.getSeconds();
export const getTime = (time: Date) => `
  ${ getPadTime(getHours(time)) }:${ getPadTime(getMinutes(time)) }:${ getPadTime(getSeconds(time)) }`;
