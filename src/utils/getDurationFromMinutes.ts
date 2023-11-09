import { intervalToDuration } from 'date-fns';
import { convertToBanglaNumber } from '.';

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
