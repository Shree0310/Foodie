// Design system for consistent styling across the app

// Color palette
export const colors = {
  primary: "#FF5A1F", // Vibrant orange for primary actions
  primaryLight: "#FFECE3", // Light orange for backgrounds
  primaryDark: "#D03801", // Darker orange for hover states
  secondary: "#1C4532", // Dark green for contrast
  secondaryLight: "#F0FFF4", // Light green for success states
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB", 
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
  white: "#FFFFFF",
  error: "#E53E3E",
  success: "#38A169",
  warning: "#F6AD55",
};

// Typography
export const typography = {
  fontFamily: {
    sans: "'Poppins', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
  },
};

// Spacing
export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
};

// Shadows
export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
};

// Border radius
export const borderRadius = {
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  full: "9999px",
};

// Transitions
export const transitions = {
  default: "all 0.3s ease",
  fast: "all 0.15s ease",
  slow: "all 0.5s ease",
};

// Common component styles
export const componentStyles = {
  button: {
    primary: `
      bg-[${colors.primary}] 
      hover:bg-[${colors.primaryDark}] 
      text-white 
      font-medium 
      py-2 
      px-4 
      rounded-lg 
      transition-all 
      duration-300
    `,
    secondary: `
      bg-white 
      hover:bg-gray-100 
      text-[${colors.primary}] 
      border 
      border-[${colors.primary}] 
      font-medium 
      py-2 
      px-4 
      rounded-lg
      transition-all 
      duration-300
    `,
    // Add more button variants as needed
  },
  card: `
    bg-white 
    rounded-lg 
    shadow-md 
    overflow-hidden 
    transition-transform 
    duration-300 
    hover:shadow-lg 
    hover:scale-[1.02]
  `,
}; 