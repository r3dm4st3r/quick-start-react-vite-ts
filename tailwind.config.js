/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires -- ignore this rule here ( required )
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif']
      },
      colors: {
        danger: '#d72b01',
        success: '#06ad4a',
        theme: '#f7641a',
        light: {
          100: '#c4c4c4',
          200: '#cdc7c7',
          300: '#e2dada',
          400: '#f1f1f1',
          500: '#fff'
        },
        dark: {
          100: '#313131',
          200: '#292929',
          300: '#28292b',
          400: '#24262d',
          500: '#000'
        }
      },
      fontWeight: {
        normal: 400,
        semiBold: 600,
        bold: 700
      }
    },
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      xxs: '380px',
      xs: '480px',
      sm: '576px',
      md: '767px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px'
    }
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    plugin(({ addBase, theme, addComponents }) => {
      addBase({
        body: {
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.normal'),
          fontSize: theme('fontSize.base'),
          lineHeight: theme('leading.normal')
        },
        h1: {
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('leading.normal')
        },
        h2: {
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.2xl'),
          lineHeight: theme('leading.normal')
        },
        h3: {
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('leading.normal')
        },
        h4: {
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('leading.normal')
        },
        h5: {
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('leading.normal')
        },
        h6: {
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.md'),
          lineHeight: theme('leading.normal')
        },
        p: {
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.normal'),
          fontSize: theme('fontSize.sm')
        }
      });
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xxs': {
            maxWidth: '95%'
          },
          '@screen xs': {
            maxWidth: '95%'
          },
          '@screen sm': {
            maxWidth: '95%'
          },
          '@screen md': {
            maxWidth: '95%'
          },
          '@screen lg': {
            maxWidth: '90%'
          },
          '@screen xl': {
            maxWidth: '90%'
          },
          '@screen xxl': {
            maxWidth: '95%'
          }
        }
      });
    })
  ]
};
