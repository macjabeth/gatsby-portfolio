const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#363657',
        secondary: '#ff8ca8',
        emphasis: '#94edea'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      listStyleType: {
        circle: 'circle'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')]
};
