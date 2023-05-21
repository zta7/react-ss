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
        base12: 'var(--base12)'

        // border: 'hsl(var(--border))',
        // input: 'hsl(var(--input))',
        // ring: 'hsl(var(--ring))',
        // background: 'hsl(var(--background))',
        // foreground: 'hsl(var(--foreground))',
        // primary: {
        //   DEFAULT: 'hsl(var(--primary))',
        //   foreground: 'hsl(var(--primary-foreground))'
        // },
        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))'
        // },
        // destructive: {
        //   DEFAULT: 'hsl(var(--destructive))',
        //   foreground: 'hsl(var(--destructive-foreground))'
        // },
        // muted: {
        //   DEFAULT: 'hsl(var(--muted))',
        //   foreground: 'hsl(var(--muted-foreground))'
        // },
        // accent: {
        //   DEFAULT: 'hsl(var(--accent))',
        //   foreground: 'hsl(var(--accent-foreground))'
        // },
        // popover: {
        //   DEFAULT: 'hsl(var(--popover))',
        //   foreground: 'hsl(var(--popover-foreground))'
        // },
        // card: {
        //   DEFAULT: 'hsl(var(--card))',
        //   foreground: 'hsl(var(--card-foreground))'
        // }
      }
      // text: {
      //   caption: ''
      // },
      // borderRadius: {
      //   lg: `var(--radius)`,
      //   md: `calc(var(--radius) - 2px)`,
      //   sm: 'calc(var(--radius) - 4px)'
      // },
      // fontFamily: {
      //   sans: ['var(--font-sans)', ...fontFamily.sans]
      // },
      // keyframes: {
      //   'accordion-down': {
      //     from: { height: 0 },
      //     to: { height: 'var(--radix-accordion-content-height)' }
      //   },
      //   'accordion-up': {
      //     from: { height: 'var(--radix-accordion-content-height)' },
      //     to: { height: 0 }
      //   }
      // },
      // animation: {
      //   'accordion-down': 'accordion-down 0.2s ease-out',
      //   'accordion-up': 'accordion-up 0.2s ease-out'
      // }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.text-h1': {
          fontSize: theme('fontSize.2xl')
        }
      })
    })
  ]
}
