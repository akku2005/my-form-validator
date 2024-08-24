// validators.ts

// Check if a value is not empty
export const isRequired = (value: any): boolean => !!value;

// Check if a value is a valid email
export const isEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// Check if a value has a minimum length
export const minLength =
  (min: number) =>
  (value: string): boolean =>
    value.length >= min;
