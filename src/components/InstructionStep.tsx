import { convertToBanglaNumber } from '../utils';

export const InstructionStep = ({ stepNumber }: { stepNumber: number }) => (
  <h3 className="relative">
    <span>ধাপ {convertToBanglaNumber(stepNumber)}</span>
    <span
      className="inline-block border-t w-full absolute top-1/2 ml-4"
      aria-hidden="true"
    ></span>
  </h3>
);
