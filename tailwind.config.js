/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#3F9BA3',
        'purple':'#4F46E5',
        'blue': '#4250D8',
        'mehroon':'#F06060',
        'greyTone':'#878787',
        'black': '#000000',
        'lBlue': '#6F92CC',
       'green':'#10B981',
        'lGrey': '#AFAFAF',
        'orange':'#FF9800',
        'white': '#ffffff',
      },
      screens: {
        xs: '475px', // Custom extra small breakpoint
        sm: '640px', // Small breakpoint
        md: '768px', // Medium breakpoint
        lg: '1024px', // Large breakpoint
        xl: '1280px', // Extra large breakpoint
        '2xl': '1536px', // 2X large breakpoint
      },
    },
      borderRadius: {
       '2xl': '12px',
      }
    //}
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}