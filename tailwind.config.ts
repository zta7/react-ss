// import colors from 'tailwindcss/colors'
// eslint-disable-next-line @typescript-eslint/no-var-requires

// const reverseColors = (m: object) => {
//   const keys = Object.keys(m)
//   const reversedValues = Object.values(m).reverse()
//   const obj = {}
//   keys.forEach((e: string, i: number) => {
//     obj[e] = reversedValues[i]
//   })
//   return obj
// }

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { fontFamily } = require('tailwindcss/defaultTheme')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

export default {
  // important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        base1: 'var(--base1)',
        base2: 'var(--base2)',
        base3: 'var(--base3)',
        base4: 'var(--base4)',
        base5: 'var(--base5)',
        base6: 'var(--base6)',
        base7: 'var(--base7)',
        base8: 'var(--base8)',
        base9: 'var(--base9)',
        base10: 'var(--base10)',
        base11: 'var(--base11)',
        base12: 'var(--base12)',

        primary1: 'var(--primary1)',
        primary2: 'var(--primary2)',
        primary3: 'var(--primary3)',
        primary4: 'var(--primary4)',
        primary5: 'var(--primary5)',
        primary6: 'var(--primary6)',
        primary7: 'var(--primary7)',
        primary8: 'var(--primary8)',
        primary9: 'var(--primary9)',
        primary10: 'var(--primary10)',
        primary11: 'var(--primary11)',
        primary12: 'var(--primary12)',

        ring: 'var(--ring)'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.text-caption': {
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.normal'),
          letterSpacing: theme('letterSpacing.wider')
        },
        '.text-overline': {
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.medium'),
          letterSpacing: theme('letterSpacing.widest')
        }
      })
    })
  ]
}
