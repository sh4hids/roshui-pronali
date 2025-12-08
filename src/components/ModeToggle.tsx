import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import * as React from "react";

export default function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <span
      className="flex cursor-pointer justify-center items-center"
      onClick={() => {
        if (theme === "theme-light" || theme === "system") {
          setThemeState("dark");
        }

        if (theme === "dark" || theme === "system") {
          setThemeState("theme-light");
        }
      }}
    >
      <SunIcon className="h-6 w-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute h-6 w-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </span>
  );
}
