import { cva, VariantProps } from 'class-variance-authority';

const VTextArea = cva('', {
  variants: {
    intent: {
      primary: [
        'flex items-center  gap-x-4 p-4 rounded-md hover:opacity-80 border border-[#504845]  text-2xl',
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
}

export interface InputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    CustomInput,
    VariantProps<typeof VTextArea>,
    VariantProps<typeof VLabel> {}

export const TextArea: React.FC<InputProps> = ({
  className,
  intent,
  label,
  lClass,
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
      <div className={VTextArea({ intent, className })}>
        <textarea
          className='border-none bg-transparent outline-none focus:border-none focus:outline-none focus:ring-0'
          {...props}
        ></textarea>
      </div>
    </div>
  );
};
