const ThemeIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8 transition-all duration-300 dark:rotate-180"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="10.5"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path d="M12 1.5 A10.5 10.5 0 0 1 12 22.5 Z" fill="currentColor" />

      <line
        x1="12"
        y1="1.5"
        x2="12"
        y2="22.5"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
};
export default Them