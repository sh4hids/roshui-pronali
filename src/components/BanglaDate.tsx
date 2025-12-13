import { useState } from 'react';
import { getDate } from 'bangla-calendar';

export default function BanglaDate() {
    const [date] = useState(new Date());

    return (
        <a
            className="text-foreground/40 inline w-auto text-xs"
            href="https://github.com/sh4hids/bangla-calendar"
            target="_blank"
        >
            {getDate(date, {
                format: 'D MMMM, YYYYb',
                calculationMethod: 'BD',
            })}
        </a>
    );
}
