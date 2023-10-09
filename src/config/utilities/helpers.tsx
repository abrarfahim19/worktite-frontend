export const compose =
  (...funcs: any) =>
  (arg: any) =>
    funcs.reduceRight((composed: any, func: Function) => func(composed), arg);

export const catchBlockHandler = (error: any, message = '') => {
  throw error;
};
