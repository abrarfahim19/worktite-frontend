import React from 'react';
import Cookies from 'universal-cookie';

import jwt_decode from 'jwt-decode';
import { UserType } from '@/config/common/AppEnums';

// A debounced input react component

const cookies = new Cookies();

export function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export function setCookie(name: string, value: string, options: any) {
  cookies.set(name, value, { ...options });
}

export function getCookie(name: string) {
  return cookies.get(name);
}

export const removeCookie = (name: string) => {
  cookies.remove(name);
};

interface User {
  name: string;
  ssoid: number;
  type: UserType;
}

export const parseToken = (token: string): User | null => {
  if (token) {
    try {
      return jwt_decode(token);
    } catch (error) {
      console.error('Error decoding JWT token:', error);
    }
  }
  return null;
};
