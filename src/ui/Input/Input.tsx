import { VariantProps, cva } from 'class-variance-authority';

const input = cva('rounded-full p-1', {
  variants: {
    length: {
      small: ['p-2'],
      medium: ['p-2'],
      large: ['p-2'],
    },
    decoration: {
      leftIcon: ['ring-2'],
    },
  },
});

export interface CustomInput {
  placeholder: string;
  tag: string;
  multiline: boolean;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {}

export const Input: React.FC<InputProps> = ({
  className,
  size,
  decoration,
  ...props
}) => {
  return (
    <div>
      <p></p>
      <input placeholder='' />
    </div>
  );
};
