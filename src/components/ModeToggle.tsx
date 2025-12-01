import * as React from 'react';
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function ModeToggle() {
    const [theme, setThemeState] = React.useState<
        'theme-light' | 'dark' | 'system'
    >('theme-light');

    React.useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        setThemeState(isDarkMode ? 'dark' : 'theme-light');
    }, []);

    React.useEffect(() => {
        const isDark =
            theme === 'dark' ||
            (theme === 'system' &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
    }, [theme]);

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => {
                if (theme === 'theme-light' || theme === 'system') {
                    setThemeState('dark');
                }

                if (theme === 'dark' || theme === 'system') {
                    setThemeState('theme-light');
                }
            }}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
