import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const isActivePath = (currentPath: string, path: string) => {
    return currentPath.split('/')[1] === path;
};
