const ThemeIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 transition-all dark:rotate-180"
      fill="none"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 3 A9 9 0 0 1 12 21 Z"
        fill="currentColor"
        className="opacity-100 dark:opacity-100"
      />
      <line
        x1="12"
        y1="3"
        x2="12"
        y2="21"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};
