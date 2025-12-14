import { type ClassValue, clsx } from 'clsx';
import { intervalToDuration } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const isActivePath = (currentPath: string, path: string) => {
    return currentPath.split('/')[1] === path;
};

export const convertToBanglaNumber = (n: number): string => {
    const numbers: { [key: number]: string } = {
        0: '০',
        1: '১',
        2: '২',
        3: '৩',
        4: '৪',
        5: '৫',
        6: '৬',
        7: '৭',
        8: '৮',
        9: '৯',
    };
    let result = '';

    if (!n) {
        return '';
    }

    const input = n.toString();
    const { length } = input;

    for (let i = 0; i < length; i++) {
        if (input[i] === '.' || input[i] === '-') {
            result += input[i];
        } else {
            result += numbers[+input[i]];
        }
    }
    return result;
};

export const generateSlug = (text: string) =>
    text
        .normalize('NFC')
        // eslint-disable-next-line no-useless-escape
        .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
        .replace(/\s+/g, '-');

export const getFormattedDurationFromMinutes = (minutes: number) => {
    const duration = intervalToDuration({ start: 0, end: minutes * 60 * 1000 });
    let formattedDuration = '';

    if (duration.hours && duration.hours > 0) {
        formattedDuration += `${convertToBanglaNumber(duration.hours)} ঘ.`;
    }

    if (duration.minutes && duration.minutes > 0) {
        formattedDuration += `${convertToBanglaNumber(duration.minutes)} মি.`;
    }

    return formattedDuration;
};

export function rootInDarkMode() {
    return document.documentElement.classList.contains('dark');
}
