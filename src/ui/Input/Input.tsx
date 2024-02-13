import { cva, VariantProps } from 'class-variance-authority';

const VInput = cva('', {
  variants: {
    intent: {
      primary: [
        'flex items-center  gap-x-4 p-4 rounded-md hover:opacity-80 border border-[#504845]  text-base',
      ],
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

const VLabel = cva('', {
  variants: {
    lClass: {
      primary: [' text-black'],
    },
  },
  defaultVariants: {
    lClass: 'primary',
  },
});
export interface CustomInput {
  /**label for input field */
  label?: string;
  /**textarea or input */
  multiline?: boolean;
  icon?: JSX.Element;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    CustomInput,
    VariantProps<typeof VInput>,
    VariantProps<typeof VLabel> {}

export const Input: React.FC<InputProps> = ({
  className,
  intent,
  label,
  lClass,
  icon,
  multiline,
  id,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className={VLabel({ lClass })}>
          {label}
        </label>
      )}
      <div className={VInput({ intent, className })}>
        {icon}
        <input
          className='w-full border-none bg-transparent outline-none focus:border-none focus:outline-none focus:ring-0'
          {...props}
        />
      </div>
    </div>
  );
};
