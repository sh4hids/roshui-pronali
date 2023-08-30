import {
  HiBell,
  HiInformationCircle,
  HiExclamationTriangle,
  HiLightBulb,
} from 'react-icons/hi2/index';

const baseStyles = 'w-10 h-10 text-pablo-50';

const variants = {
  info: 'info',
  tips: 'tips',
  warning: 'warning',
  notice: 'notice',
} as const;

export type NoticeVariant = keyof typeof variants;

interface Props {
  variant?: NoticeVariant;
}

export const NoticeIcon: React.FC<Props> = ({ variant = variants.info }) => {
  switch (variant) {
    case 'warning':
      return <HiExclamationTriangle className={`${baseStyles}`} />;
    case 'tips':
      return <HiLightBulb className={`${baseStyles}`} />;
    case 'notice':
      return <HiBell className={`${baseStyles}`} />;
    default:
      return <HiInformationCircle className={`${baseStyles}`} />;
  }
};
