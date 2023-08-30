import type React from 'react';

export const buttonBaseClasses =
  'cursor-pointer rounded-3xl text-lg uppercase py-4 p-6 drop-shadow hover:drop-shadow-lg ease-in-out duration-300';

export const buttonVariants = {
  primary: 'bg-chilli-600 hover:bg-chilli-700 text-pablo-50',
  secondary: 'bg-pablo-50 hover:bg-pablo-100 text-chilli-600',
  warning: 'bg-amber-600 hover:bg-amber-700 text-pablo-50',
  error: 'bg-red-600 hover:bg-red-700 text-pablo-50',
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

interface TextProps {
  variant?: ButtonVariant;
  type?: 'button' | 'submit';
  children: React.ReactNode;
}

export const Button: React.FC<TextProps> = ({
  variant = 'primary',
  type = 'button',
  children,
}) => {
  return (
    <button
      type={type}
      className={`${buttonBaseClasses} ${buttonVariants[variant]}`}
    >
      {children}
    </button>
  );
};
