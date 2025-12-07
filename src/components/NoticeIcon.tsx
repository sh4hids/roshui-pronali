import {
    BellIcon,
    InfoIcon,
    ExclamationMarkIcon,
    LightbulbIcon,
} from '@phosphor-icons/react';

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
            return <ExclamationMarkIcon className={`${baseStyles}`} />;
        case 'tips':
            return <LightbulbIcon className={`${baseStyles}`} />;
        case 'notice':
            return <BellIcon className={`${baseStyles}`} />;
        default:
            return <InfoIcon className={`${baseStyles}`} />;
    }
};
