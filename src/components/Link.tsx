import type React from 'react';
import {
  type ButtonVariant,
  buttonBaseClasses,
  buttonVariants,
} from './Button';

const linkBaseClasses = 'cursor-pointer ease-in-out duration-300';

const linkVariants = {
  primary: 'text-chilli-600 hover:text-chilli-700',
  secondary: 'text-pablo-50 hover:text-pablo-100',
  warning: 'text-amber-600 hover:text-amber-700',
  error: 'text-red-600 hover:text-red-700',
} as const;

export const LinkType = {
  button: 'button',
  link: 'link',
} as const;

export type LinkVariant = keyof typeof linkVariants;

interface LinkProps {
  variant?: LinkVariant | ButtonVariant;
  type?: 'button' | 'link';
  to: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  variant = 'primary',
  type = LinkType.link,
  to,
  children,
}) => {
  return (
    <a
      type={type}
      href={to}
      className={`${type === 'button' ? buttonBaseClasses : linkBaseClasses} ${
        type === LinkType.button
          ? buttonVariants[variant]
          : linkVariants[variant]
      }`}
    >
      {children}
    </a>
  );
};
