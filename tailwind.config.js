/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths to match your project structure
    "./public/index.html",        // Add any other paths that Tailwind should scan for class names
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#657786',
        background: '#E1E8ED',
        surface: '#F5F8FA',
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
    },
    corePlugins: {
      preflight: false, // Disable Tailwind's preflight (CSS reset)
    },
  },
  plugins: [],
}
