import type React from 'react';

const baseClasses = '';

const variants = {
  display: 'font-display text-4xl',
  h1: 'font-sans text-4xl mt-12 pb-2 font-bold',
  h2: 'font-sans text-3xl mt-12 pb-2 font-bold',
  h3: 'font-sans text-2xl mt-12 pb-2 font-bold',
  h4: 'font-sans text-xl mt-12 pb-2 font-bold',
  h5: 'font-sans text-lg mt-12 pb-2 font-bold',
  h6: 'font-sans text-base mt-12 pb-2 font-bold',
  body: 'font-sans text-base mb-5',
  label1: 'font-sans text-sm mb-5',
  label2: 'font-sans text-xs mb-5',
};

type TextVariant = keyof typeof variants;

interface TextProps {
  variant?: TextVariant;
  component?: React.ElementType;
  color?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  component = 'p',
  children,
  color,
}) => {
  const Component = component;

  return (
    <Component className={`${baseClasses} ${variants[variant]} ${color}`}>
      {children}
    </Component>
  );
};
